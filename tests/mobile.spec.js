import { expect, test } from "@playwright/test";

test.describe("Mobile landing page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");

        await expect(page).toHaveTitle(/Synapse IA/i);
    });

    test("deve carregar corretamente no mobile", async ({ page }) => {
        await expect(
            page.getByRole("heading", {
                name: /Use uma IA que entrega valor desde o primeiro dia/i,
            }),
        ).toBeVisible();
    });

    test("não deve apresentar overflow horizontal", async ({ page }) => {
        const documentWidth = await page.evaluate(
            () => document.documentElement.scrollWidth,
        );

        const viewportWidth = await page.evaluate(
            () => window.innerWidth,
        );

        expect(documentWidth).toBeLessThanOrEqual(viewportWidth);
    });

    test("deve exibir o botão de menu mobile", async ({ page }) => {
        const menuButton = page.getByRole("button", {
            name: /menu|abrir/i,
        });

        await expect(menuButton).toBeVisible();
    });

    test("deve abrir a navegação mobile", async ({ page }) => {
        const menuButton = page.getByRole("button", {
            name: /menu|abrir/i,
        });

        await menuButton.click();

        const navigation = page.getByRole("navigation", {
            name: "Navegação mobile",
        });

        await expect(navigation).toBeVisible();

        await expect(menuButton).toHaveAttribute(
            "aria-expanded",
            "true",
        );
    });

    test("deve alternar corretamente o estado do menu", async ({
        page,
    }) => {
        const menuButton = page.getByRole("button", {
            name: /menu|abrir/i,
        });

        await expect(menuButton).toHaveAttribute(
            "aria-expanded",
            "false",
        );

        await menuButton.click();

        await expect(menuButton).toHaveAttribute(
            "aria-expanded",
            "true",
        );

        await menuButton.click();

        await expect(menuButton).toHaveAttribute(
            "aria-expanded",
            "false",
        );
    });

    test("deve permitir navegar até preços pelo menu mobile", async ({
        page,
    }) => {
        const menuButton = page.getByRole("button", {
            name: /menu|abrir/i,
        });

        await menuButton.click();

        const navigation = page.getByRole("navigation", {
            name: "Navegação mobile",
        });

        await navigation
            .getByRole("link", { name: "Preços" })
            .click();

        await expect(page.locator("#pricing")).toBeInViewport();
    });

    test("deve permitir abrir o FAQ no mobile", async ({ page }) => {
        await page.locator("#faq").scrollIntoViewIfNeeded();

        const faqButton = page
            .locator("#faq")
            .getByRole("button")
            .first();

        await expect(faqButton).toHaveAttribute(
            "aria-expanded",
            "true",
        );

        await faqButton.click();

        await expect(faqButton).toHaveAttribute(
            "aria-expanded",
            "false",
        );
    });

    test("deve permitir alternar pricing no mobile", async ({ page }) => {
        await page.locator("#pricing").scrollIntoViewIfNeeded();

        const monthlyButton = page.getByRole("button", {
            name: "Mensal",
        });

        const annualButton = page.getByRole("button", {
            name: "Anual",
        });

        await monthlyButton.click();

        await expect(monthlyButton).toHaveAttribute(
            "aria-pressed",
            "true",
        );

        await expect(annualButton).toHaveAttribute(
            "aria-pressed",
            "false",
        );
    });
});