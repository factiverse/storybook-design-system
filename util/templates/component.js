module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from 'react';
import { ${componentName}Props } from './${componentName}.types';
import './${componentName}.scss';

/**
 * Describe what this component is used for.
 */
const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
  <div data-testid="TestComponent" className="foo-bar">
    {foo}
  </div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
