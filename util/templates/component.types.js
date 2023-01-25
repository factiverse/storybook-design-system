module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
export interface ${componentName}Props {
  /**
    * Describe what this prop is used for.
    */
  foo: string;
}
`,
  extension: `.types.ts`
});
