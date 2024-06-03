
import puppeteer from 'puppeteer';


async function printPDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-dev-shm-usage",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  const page = await browser.newPage();
  await page.setContent(html, {
    waitUntil: "domcontentloaded",
  });
  const pdf = await page.pdf({ format: "Letter", landscape: true });

  await browser.close();
  return pdf;
}


const getPDF = async(req,res,next)=>{
    const pdf = await printPDF();
    res.setHeader('Content-Length', 10000);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    res.send(pdf);
}
