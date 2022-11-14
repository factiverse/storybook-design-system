// Generated with util/create-component.js
export interface LanguageSelectProps {
  languages: string[]; // list of languages to choose from
  language: string; // currently selected language
  setLanguage: (newLanguage: string) => void;
  fixedLanguages?: string[]; // prioritsed languages which are sorted to the top of the list
}
