module.exports = {
    "env": {
        "browser": false
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": false,
            "jsx": true,
            "modules": true
        }
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "no-console": "off",
        "comma-dangle" : 0,
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "settings": {
        "react": {
          "pragma": "React",
          "version": "0.14.8"
        }
    },
};