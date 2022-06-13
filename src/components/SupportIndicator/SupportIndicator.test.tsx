import * as React from 'react';
import SupportIndicator from './SupportIndicator';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

/**
 * Random number generator between two values
 *
 * @param {number} min no lower than (and may possibly equal) to
 * @param {number} max less than (and not equal) to
 * @returns {number} a random number between the specified values
 */
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const scores = [
  getRandomArbitrary(0, 0.4),
  getRandomArbitrary(0.4, 0.6),
  getRandomArbitrary(0.6, 1.0),
];
const labels = ['Disputed', 'Conflicting sources', 'Supported'];
const tooltips = [
  'Most found sources dispute this claim.',
  'The found sources are conflicting.',
  'Most found sources support this claim.',
];
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

scores.forEach((score) => {
  describe('SupportIndicator component', () => {
    beforeEach(() => {
      render(
        <div data-testid="testing">
          <SupportIndicator score={score} labels={labels} tooltips={tooltips} />
        </div>
      );
    });

    it('should render static text', () => {
      labels.forEach((label) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
    });

    it('should show tooltips', () => {
      tooltips.forEach((tooltip) => {
        expect(screen.getByLabelText(tooltip)).toBeInTheDocument();
      });
    });

    let expectedClass = '';
    if (score < 0.4) expectedClass = 'red-common';
    if (score >= 0.4 && score < 0.6) expectedClass = 'yellow-common';
    if (score >= 0.6) expectedClass = 'green-common';

    it('should highlight depending on score', () => {
      const indicatorContainer =
        screen.getByTestId('testing').firstChild?.firstChild;
      const indicators = indicatorContainer?.childNodes;
      expect(indicatorContainer).toHaveClass('SupportIndicator');
      expect(indicators?.length).toBe(5);
      indicators?.forEach((indicator, i) => {
        expect(indicator).toHaveClass('SupportIndicatorItem');
        if (i == 0 || score >= i / 5)
          // eslint-disable-next-line jest/no-conditional-expect
          expect(indicator).toHaveClass(expectedClass);
      });
    });
  });
});