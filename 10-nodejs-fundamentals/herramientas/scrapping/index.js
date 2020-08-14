const puppeteer = require('puppeteer');

(async () => {
    // Nuestro código
    console.log('Lanzamos navegador!')
    //const browser = await puppeteer.launch() // Para no ver el navegador
    const browser = await puppeteer.launch({ headless: false })

    const page = await browser.newPage()
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1')
        return h1.innerHTML
    })

    console.log(titulo1)

    console.log('Cerramos navegador...')
    browser.close()
    console.log('Navegador cerrado')
})();