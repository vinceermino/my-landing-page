// apps/web/jest.config.js
import nextJest from "next/jest"

const createJestConfig = nextJest({
  dir: "./",
})

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // <-- CRUCIAL: points to the app root
  testEnvironment: "jest-environment-jsdom",
  // ... other config
}

module.exports = createJestConfig(customJestConfig)
