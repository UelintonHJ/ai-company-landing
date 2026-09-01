import { expect, test } from "@playwright/test";

test.describe("Desktop landing page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveTitle(/Synapse IA/i);
    });

    test("deve carregar corretamente no desktop", async ({ page }) => {
        await expect(
            page.getByRole("heading", {
                name: /Use uma IA que entrega valor desde o primeiro dia/i,
            })
        ).toBeVisible();

        await expect(
            page.getByRole("navigation", {
                name: "Navegação principal",
            })
        ).toBeVisible();
    });

    test("não deve apresentar overflow horizontal", async ({ page }) => {
        const documentWidth = await page.evaluate(
            () => document.documentElement.scrollWidth
        );

        const viewportWidth = await page.evaluate(
            () => window.innerWidth
        );

        expect(documentWidth).toBeLessThanOrEqual(viewportWidth);
    });

    test("links principais devem apontar para seções internas", async ({
        page,
    }) => {
        await page.goto("/");

        const navigation = page.getByRole("navigation", {
            name: "Navegação principal",
        });

        const expectLinks = [
            {
                name: "Recursos",
                target: "#services",
            },
            {
                name: "Preços",
                target: "#pricing",
            },
            {
                name: "Sobre",
                target: "#about",
            },
            {
                name: "FAQ",
                target: "#faq",
            },
        ];

        for (const link of expectLinks) {
            await expect(
                navigation.getByRole("link", {
                    name: link.name,
                }),
            ).toHaveAttribute("href", link.target);
        }
    });

    test("deve exibir a navegação desktop", async ({ page }) => {
        const navigation = page.getByRole("navigation", {
            name: "Navegação principal",
        });

        await expect(navigation).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "Recursos" })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "Preços" })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "Sobre" })
        ).toBeVisible();

        await expect(
            navigation.getByRole("link", { name: "FAQ" })
        ).toBeVisible();
    });

    test("deve navegar para a seção de recursos", async ({ page }) => {
        await page
            .getByRole("navigation", {
                name: "Navegação principal",
            })
            .getByRole("link", { name: "Recursos" })
            .click();

        await expect(page.locator("#services")).toBeInViewport();
    });

    test("deve navegar para a seção de preços", async ({ page }) => {
        await page
            .getByRole("navigation", {
                name: "Navegação principal",
            })
            .getByRole("link", { name: "Preços" })
            .click();

        await expect(page.locator("#pricing")).toBeInViewport();
    });

    test("deve navegar para a seção sobre", async ({ page }) => {
        await page
            .getByRole("navigation", {
                name: "Navegação principal",
            })
            .getByRole("link", { name: "Sobre" })
            .click();

        await expect(page.locator("#about")).toBeInViewport();
    });

    test("deve navegar para a seção FAQ", async ({ page }) => {
        await page
            .getByRole("navigation", {
                name: "Navegação principal",
            })
            .getByRole("link", { name: "FAQ" })
            .click();

        await expect(page.locator("#faq")).toBeInViewport();
    });

    test("deve permitir alternar entre os planos mensal e anual", async ({
        page,
    }) => {
        const monthlyButton = page.getByRole("button", {
            name: "Mensal",
        });

        const annualButton = page.getByRole("button", {
            name: "Anual",
        });

        await expect(monthlyButton).toHaveAttribute(
            "aria-pressed",
            "false"
        );

        await expect(annualButton).toHaveAttribute(
            "aria-pressed",
            "true"
        );

        await monthlyButton.click();

        await expect(monthlyButton).toHaveAttribute(
            "aria-pressed",
            "true"
        );

        await expect(annualButton).toHaveAttribute(
            "aria-pressed",
            "false"
        );
    });

    test("deve permitir abrir e fechar o FAQ", async ({ page }) => {
        const faqButton = page
            .locator("#faq")
            .getByRole("button")
            .first();

        await expect(faqButton).toHaveAttribute(
            "aria-expanded",
            "true"
        );

        await faqButton.click();

        await expect(faqButton).toHaveAttribute(
            "aria-expanded",
            "false"
        );

        await faqButton.click();

        await expect(faqButton).toHaveAttribute(
            "aria-expanded",
            "true"
        );
    });

    test("deve exibir o footer", async ({ page }) => {
        const footer = page.locator("footer");

        await footer.scrollIntoViewIfNeeded();

        await expect(footer).toBeVisible();

        await expect(
            footer.getByRole("link", {
                name: /ola@exemplo.com/i,
            })
        ).toBeVisible();
    });

    test("deve exibir o botão voltar ao topo após scroll", async ({
        page,
    }) => {
        await page.evaluate(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "instant",
            });
        });

        const backToTopButton = page.getByRole("button", {
            name: /voltar ao topo/i,
        });

        await expect(backToTopButton).toBeVisible();
    });

    test("deve voltar ao topo quando acionado", async ({ page }) => {
        await page.goto("/");

        await page.evaluate(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "instant",
            });
        });

        const button = page.getByRole("button", {
            name: /voltar ao topo/i,
        });

        await expect(button).toBeVisible();

        await button.click();

        await expect
            .poll(() =>
                page.evaluate(() => window.scrollY),
        )
        .toBeLessThan(50);
    });
});