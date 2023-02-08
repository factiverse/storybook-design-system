export interface SelectProps {
  /**
   * List of options to choose from
   */
  options: string[];
  /**
   * Currently selected option
   */
  option: string;
  /**
   * Sets the language on change
   */
  setOption: (newLanguage: string) => void;
  /**
   * Prioritised options which are sorted to the top of the list
   */
  fixedOptions?: string[];
  /**
   * Indicates that more options are being loaded
   */
  loading?: boolean;
}
