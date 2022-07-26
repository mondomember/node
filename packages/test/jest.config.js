const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$";

// get listing of packages in the mono repo
const basePath = path.resolve(__dirname, "packages");
const packages = readdirSync(basePath).filter((name) => {
  return lstatSync(path.join(basePath, name)).isDirectory();
});

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
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@mondomember/${name}(.*)$`]: `<rootDir>/packages/./${name}/lib/$1`,
      }),
      {}
    ),
  },
};
