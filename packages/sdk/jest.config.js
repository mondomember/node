const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$";

module.exports = {
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
    [`@mondomember/test/(.*)$`]: `<rootDir>/../test/lib/$1`,
  },
};
