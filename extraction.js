const puppeteer = require("puppeteer");
const fs = require("fs");

async function findScientists() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    "https://en.wikipedia.org/wiki/Category:Manhattan_Project_people"
  );
  const scientistNames = await page.evaluate(() => {
    const mwPagesDiv = document.getElementById("mw-pages");

    const scientistElements = mwPagesDiv.querySelectorAll("li a");
    return Array.from(scientistElements, (scientistElement) =>
      scientistElement.textContent.trim()
    );
  });
  const fileName = "scientist_names4.txt";
  fs.writeFileSync(fileName, scientistNames.join("\n"), "utf-8");

  console.log(`Scientist names saved to ${fileName}`);

  await browser.close();
}

findScientists();
