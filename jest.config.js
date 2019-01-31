module.exports = {
    "clearMocks": true,
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}"
    ],
    "coveragePathIgnorePatterns": [
        ".*\\.d\\.ts"
    ],
    "testMatch": [
        "<rootDir>/src/**/?(*.)(spec).(ts|tsx)"
    ],
    "setupFiles": [
        "<rootDir>/config/jest/setup/console.setup.js"
    ],
    "testURL": "http://localhost",
    "transform": {
        "^(?!.*\\.(js|ts|tsx|css|json)$)": "<rootDir>/config/jest/transform/file.transform.js",
        "^.+\\.tsx?$": "<rootDir>/config/jest/transform/typescript.transform.js"
    },
    "moduleFileExtensions": [
        "web.ts",
        "ts",
        "tsx",
        "web.js",
        "js",
        "json",
        "node"
    ],
    "globals": {
        "ts-jest": {
            "tsConfig": "src/tsconfig.spec.json"
        }
    },
    "coverageThreshold": {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    }
};
