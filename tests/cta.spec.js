import { expect, test } from "@playwright/test";

test.describe("Call to Action", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Hero deve possuir CTA de contato", async ({ page }) => {
        const hero = page.locator("main").first();
        const cta = hero.getByRole("link", {
            name: /comece o teste grátis/i,
        }).first();

        await expect(cta).toBeVisible();

        await expect(cta).toHaveAttribute(
            "href",
            /^mailto:/i,
        );
    });

    test("CTA final deve possuir link de contato", async ({ page }) => {
        const links = page.locator('a[href^="mailto:"]');

        await expect(links).not.toHaveCount(0);
    });

    test("links de contato devem possuir endereço válido", async ({
        page,
    }) => {
        const links = page.locator('a[href^="mailto:"]');
        const count = await links.count();
        expect(count).toBeGreaterThan(0);

        for (let index = 0; index < count; index += 1) {
            const href = await links.nth(index).getAttribute("href");

            expect(href).toMatch(
                /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+(?:\?.*)?$/i,
            );
        }
    });
});