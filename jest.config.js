module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: ['node_modules', 'testOutput.json', 'util'],
};
