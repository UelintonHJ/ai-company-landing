import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: Boolean(process.env.CI),
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        ["list"],
        ["html", { open: "never" }],
    ],
    use: {
        baseURL: "http://127.0.0.1:5173",
        trace: "on-first-retry",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },

    projects: [
        {
            name: "desktop-chromium",
            testMatch: [
                /desktop\.spec\.js/,
                /accessibility\.spec\.js/,
                /cta\.spec\.js/,
                /console\.spec\.js/,
                /keyboard\.spec\.js/,
                /seo\.spec\.js/,
            ],
            use: {
                ...devices["Desktop Chrome"],
                viewport: {
                    width: 1440,
                    height: 900,
                },
                deviceScaleFactor: 1,
                isMobile: false,
                hasTouch: false,
            },
        },

        {
            name: "mobile-chromium",
            testMatch: [
                /mobile\.spec\.js/,
                /responsive\.spec\.js/,
            ],
            use: {
                ...devices["Pixel 5"],
                viewport: {
                    width: 390,
                    height: 844,
                },
                isMobile: true,
                hasTouch: true,
            },
        },
    ],

    webServer: {
        command: "npm run dev -- --host 127.0.0.1",
        url: "http://127.0.0.1:5173",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
});