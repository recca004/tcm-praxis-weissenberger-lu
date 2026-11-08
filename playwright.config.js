import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  workers: 4,
  use: {
    baseURL: 'http://localhost:4321',
  },
  webServer: {
    command: 'npm run preview -- --port 3002',
    url: 'http://localhost:4321/de/',
    reuseExistingServer: true,
    timeout: 60000,
  },
});
