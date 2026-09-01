import { expect, test } from "@playwright/test";

test.describe("Accessibility", () => {
    test("deve respeitar prefers-reduced-motion", async ({ page }) => {
        await page.emulateMedia({
            reducedMotion: "reduce",
        });

        await page.goto("/");

        await expect(
            page.getByRole("heading", {
                name: /Use uma IA que entrega valor desde o primeiro dia/i,
            }),
        ).toBeVisible();

        const reducedMotion = await page.evaluate(() =>
            window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches,
        );

        expect(reducedMotion).toBe(true);
    });

    test("elementos interativos devem possuir nome acessível", async ({
        page,
    }) => {
        await page.goto("/");

        const buttons = page.getByRole("button");
        const count = await buttons.count();

        for (let index = 0; index < count; index += 1) {
            await expect(buttons.nth(index)).toHaveAccessibleName(/.+/);
        }
    });

    test("links devem possuir nome acessível", async ({ page }) => {
        await page.goto("/");

        const links = page.getByRole("link");
        const count = await links.count();

        for (let index = 0; index < count; index += 1) {
            await expect(links.nth(index)).toHaveAccessibleName(/.+/);
        }
    });

    test("imagens devem possuir texto alternativo", async ({ page }) => {
        await page.goto("/");

        const imagens = page.locator("img");
        const count = await imagens.count();

        for (let index = 0; index < count; index += 1) {
            await expect(imagens.nth(index)).toHaveAttribute(
                "alt",
                /.+/,
            );
        }
    });
});