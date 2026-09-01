import { expect, test } from "@playwright/test";

test.describe("Responsive layout", () => {
    test("não deve apresentar overflow em 320px", async ({ page }) => {
        await page.setViewportSize({
            width: 320,
            height: 568,
        });

        await page.goto("/");

        const documentWidth = await page.evaluate(
            () => document.documentElement.scrollWidth,
        );

        const viewportWidth = await page.evaluate(
            () => window.innerWidth,
        );

        expect(documentWidth).toBeLessThanOrEqual(viewportWidth);
    });

    test("não deve apresentar overflow em 430px", async ({ page }) => {
        await page.setViewportSize({
            width: 430,
            height: 932,
        });

        await page.goto("/");

        const documentWidth = await page.evaluate(
            () => document.documentElement.scrollWidth,
        );

        const viewportWidth = await page.evaluate(
            () => window.innerWidth,
        );

        expect(documentWidth).toBeLessThanOrEqual(viewportWidth);
    });
});