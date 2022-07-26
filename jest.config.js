const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$";

module.exports = {
  preset: "ts-jest",
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // "^.+\\.tsx?$": "babel-jest",
    // "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
  ],
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    [`@mondomember/test(.*)$`]: `<rootDir>/packages/./test/$1`,
    [`@mondomember/sdk(.*)$`]: `<rootDir>/packages/./sdk/$1`,
  },
};
