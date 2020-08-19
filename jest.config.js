module.exports = {
    setupFiles: ["<rootDir>/src/setupTests.ts"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    preset: "ts-jest"
};
