module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(vuetify|vue-pdf|vue-resize-sensor))',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@unit/(.*)$': '<rootDir>/tests/unit/$1',
    '^@e2e/(.*)$': '<rootDir>/tests/e2e/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
};
