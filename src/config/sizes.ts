export type ComponentSize = 'small' | 'medium' | 'large';
export type ComponentVariant = 'standard' | 'filled' | 'outlined' | undefined;
export type ComponentColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export const sidePaddings: { [key in ComponentSize]: number } = {
  large: 30,
  medium: 25,
  small: 20,
};

export const heights: { [key in ComponentSize]: number } = {
  large: 55,
  medium: 45,
  small: 35,
};
