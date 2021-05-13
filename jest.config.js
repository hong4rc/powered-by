// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
};
