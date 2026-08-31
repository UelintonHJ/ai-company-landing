import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
    test('deve mostrar os metadados do documento necessários', async ({ page }) => {
        await page.goto('/')

        await expect(page).toHaveTitle(
            'Synapse IA'
        )

        await expect(
            page.locator('html')
        ).toHaveAttribute('lang', 'pt-BR')

        await expect(
            page.locator('meta[name="description"]')
        ).toHaveAttribute(
            'content',
            /inteligência artificial/i
        )

        await expect(
            page.locator('meta[name="robots"]')
        ).toHaveAttribute(
            'content',
            'index, follow'
        )
    })

    test('deve mostrar uma URL canônica', async ({ page }) => {
        await page.goto('/')

        const canonical = page.locator(
            'link[rel="canonical"]'
        )

        await expect(canonical).toHaveCount(1)

        await expect(canonical).toHaveAttribute(
            'href',
            /https:\/\//
        )
    })

    test('deve mostrar metadados do Open Graph', async ({ page }) => {
        await page.goto('/')

        await expect(
            page.locator('meta[property="og:title"]')
        ).toHaveAttribute(
            'content',
            'Synapse IA'
        )

        await expect(
            page.locator('meta[property="og:description"]')
        ).toHaveAttribute(
            'content',
            /inteligência artificial/i
        )

        await expect(
            page.locator('meta[property="og:image"]')
        ).toHaveAttribute(
            'content',
            /og-image/
        )
    })

    test('deve mostrar dados estruturados', async ({ page }) => {
        await page.goto('/')

        const structuredData = page.locator(
            'script[type="application/ld+json"]'
        )

        await expect(structuredData).toHaveCount(1)

        const content = await structuredData.textContent()

        expect(content).toContain('"@type": "Organization"')
        expect(content).toContain('"name": "Synapse IA"')
    })

    test('deve mostrar o robots.txt', async ({ request }) => {
        const response = await request.get('/robots.txt')

        expect(response.ok()).toBeTruthy()

        const body = await response.text()

        expect(body).toContain('User-agent: *')
        expect(body).toContain('Sitemap:')
    })

    test('deve mostrar o sitemap.xml', async ({ request }) => {
        const response = await request.get('/sitemap.xml')

        expect(response.ok()).toBeTruthy()

        const body = await response.text()

        expect(body).toContain('<urlset')
        expect(body).toContain('<loc>')
    })
})