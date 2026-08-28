import { expect, test } from "@playwright/test";

test.describe("Keyboard accessibility", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveTitle(/Synapse IA/i);
    });

    test("deve permitir navegar pelos controles usando Tab", async ({ page }) => {
        await page.keyboard.press("Tab");

        const focusableElement = page.locator(":focus");

        await expect(focusableElement).toBeVisible();
    });

    test("deve iniciar a navegação pelo elemento interativo esperado", async ({
        page,
    }) => {
        await page.keyboard.press("Tab");

        const focusedElement = page.locator(":focus");

        await expect(focusedElement).toHaveAttribute("href", "#top");
    })

    test("deve permitir ativar o FAQ usando Enter", async ({ page }) => {
        const faqButton = page
            .locator("#faq")
            .getByRole("button")
            .first();

        await faqButton.focus();

        await expect(faqButton).toBeFocused();
        await expect(faqButton).toHaveAttribute("aria-expanded", "true");

        await page.keyboard.press("Enter");

        await expect(faqButton).toHaveAttribute("aria-expanded", "false");
    });

    test("deve permitir ativar o FAQ usando Space", async ({ page }) => {
        const faqButton = page
            .locator("#faq")
            .getByRole("button")
            .first();

        await faqButton.focus();

        await expect(faqButton).toBeFocused();

        await page.keyboard.press("Space");

        await expect(faqButton).toHaveAttribute("aria-expanded", "false");
    });

    test("deve permitir alterar o período de conbrança usando teclado", async ({
        page,
    }) => {
        const monthlyButton = page.getByRole("button", {
            name: "Mensal",
        });

        const annualButton = page.getByRole("button", {
            name: "Anual",
        });

        await monthlyButton.focus();

        await expect(monthlyButton).toBeFocused();

        await page.keyboard.press("Enter");

        await expect(monthlyButton).toHaveAttribute(
            "aria-pressed",
            "true"
        );

        await expect(annualButton).toHaveAttribute(
            "aria-pressed",
            "false"
        );
    });
});

test.describe("Mobile menu keyboard accessibility", () => {
    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({
            width: 390,
            height: 844,
        });

        await page.goto("/");
        await expect(page).toHaveTitle(/Synapse IA/i);
    });

    test("deve abrir o menu mobile usando teclado", async ({ page }) => {
        const menuButton = page.getByRole("button", {
            name: "Abrir menu",
        });

        await menuButton.focus();

        await expect(menuButton).toBeFocused();

        await page.keyboard.press("Enter");

        const mobileMenu = page.locator("#mobile-menu");

        await expect(mobileMenu).toBeVisible();

        const firstMenuLink = mobileMenu.getByRole("link").first();

        await expect(firstMenuLink).toBeFocused();
    });

    test("deve fechar o menu com Escape e devolver o foco ao botão", async ({
        page,
    }) => {
        const menuButton = page.locator(
            'button[aria-controls="mobile-menu"]'
        );
        
        const mobileMenu = page.locator("#mobile-menu");

        await menuButton.focus();

        await expect(menuButton).toBeFocused();

        await page.keyboard.press("Enter");

        await expect(menuButton).toHaveAttribute(
            "aria-expanded",
            "true"
        );

        await expect(mobileMenu).toHaveAttribute(
            "aria-hidden",
            "false"
        );

        const firstMenuLink = mobileMenu.getByRole("link").first();

        await expect(firstMenuLink).toBeFocused();

        await page.keyboard.press("Escape");

        await expect(menuButton).toHaveAttribute(
            "aria-expanded",
            "false"
        );

        await expect(mobileMenu).toHaveAttribute(
            "aria-hidden",
            "true"
        );

        await expect(mobileMenu).toHaveAttribute(
            "inert",
            ""
        );

        await expect(menuButton).toBeFocused();
    });

    test("deve manter o foco dentro do menu ao pressionar Tab", async ({
        page,
    }) => {
        const menuButton = page.getByRole("button", {
            name: "Abrir menu",
        });

        await menuButton.focus();
        await page.keyboard.press("Enter");

        const menu = page.locator("#mobile-menu");

        const focusableElements = menu.locator(
            'a[href], button:not([disabled])'
        );

        const lastElement = focusableElements.last();

        await lastElement.focus();

        await expect(lastElement).toBeFocused();

        await page.keyboard.press("Tab");

        await expect(focusableElements.first()).toBeFocused();
    });

    test("deve manter o foco dentro do menu ao usar Shift+Tab", async ({
        page,
    }) => {
        const menuButton = page.getByRole("button", {
            name: "Abrir menu",
        });

        await menuButton.focus();
        await page.keyboard.press("Enter");

        const menu = page.locator("#mobile-menu");

        const focusableElements = menu.locator(
            'a[href], button:not([disabled])'
        );

        const firstElement = focusableElements.first();
        const lastElement = focusableElements.last();

        await firstElement.focus();

        await expect(firstElement).toBeFocused();

        await page.keyboard.press("Shift+Tab");

        await expect(lastElement).toBeFocused();
    });

    test("deve permitir navegar pelo Showcase usando teclado", async ({
        page,
    }) => {
        const showcaseButtons = page
            .locator("#showcase")
            .getByRole("button");

        const firstButton = showcaseButtons.first();
        const secondButton = showcaseButtons.nth(1);

        await firstButton.focus();

        await expect(firstButton).toBeFocused();

        await page.keyboard.press("Tab");

        await expect(secondButton).toBeFocused();

        await page.keyboard.press("Enter");

        await expect(secondButton).toBeFocused();
    });

    test("deve permitir navegar pelos depoimentos usando teclado", async ({
        page,
    }) => {
        const testimonialSection = page.locator(
            "section"
        ).filter({
            hasText: "O que dizem os nossos clientes",
        });

        const nextButton = testimonialSection.getByRole("button", {
            name: "Próximo depoimento",
        });

        await nextButton.focus();

        await expect(nextButton).toBeFocused();

        await page.keyboard.press("Enter");

        await expect(nextButton).toBeFocused();
    });

    test("deve permitir voltar ao topo usando teclado", async ({ page }) => {
        await page.evaluate(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "instant",
            });
        });

        const backToTopButton = page.getByRole("button", {
            name: "Voltar ao topo",
        });

        await expect(backToTopButton).toBeVisible();

        await backToTopButton.focus();

        await expect(backToTopButton).toBeFocused();

        await page.keyboard.press("Enter");

        await expect
            .poll(() =>
                page.evaluate(() => window.scrollY)
            )
            .toBeLessThan(100);
    });

    test("deve aplicar estilo visual de foco nos controles", async ({ page }) => {
        const menuButton = page.getByRole("button", {
            name: "Abrir menu",
        });

        await menuButton.focus();

        await expect(menuButton).toBeFocused();

        const outline = await menuButton.evaluate((element) => {
            const styles = window.getComputedStyle(element);

            return {
                outlineStyle: styles.outlineStyle,
                outlineWidth: styles.outlineWidth,
            };
        });

        expect(
            outline.outlineStyle !== "none" ||
            outline.outlineWidth !== "0px"
        ).toBeTruthy();
    });
});