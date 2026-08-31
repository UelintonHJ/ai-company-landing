import { expect, test } from "@playwright/test";

test.describe("Browser console", () => {
    test("não deve apresentar erros no console ou runtime", async ({ page }) => {
        const consoleErrors = [];
        const pageErrors = [];

        page.on("console", (message) => {
            if (message.type() === "error") {
                consoleErrors.push(message.text());
            }
        });

        page.on("pageerror", (error) => {
            pageErrors.push(error.message);
        });

        await page.goto("/");

        await expect(
            page.getByRole("heading", {
                name: /Use uma IA que entrega valor desde o primeiro dia/i,
            })
        ).toBeVisible();

        await page.getByRole("link", { name: "Recursos "}).click();
        await expect(page.locator("#services")).toBeInViewport();

        await page.getByRole("link", { name: "Preços" }).click();
        await expect(page.locator("#pricing")).toBeInViewport();

        await page.getByRole("button", { name: "Mensal" }).click();
        await page.getByRole("button", { name: "Anual" }).click();

        const faqButton = page
            .locator("#faq")
            .getByRole("button")
            .first();

        await faqButton.click();
        await faqButton.click();

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
        await backToTopButton.click();

        expect(
            consoleErrors,
            `Foram encontrados erros no console:\n${consoleErrors.join("\n")}`
        ).toHaveLength(0);

        expect(
            pageErrors,
            `Foram encontrados erros de runtime:\n${pageErrors.join("\n")}`
        ).toHaveLength(0);
    });
});