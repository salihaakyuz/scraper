const fs = require("fs");

fs.readFile("scientist_names.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");
  const scientistNames = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("Manhattan Project Scientists:")) {
      const scientistName = line
        .replace("Manhattan Project Scientists:", "")
        .trim();
      scientistNames.push(scientistName);
    }
  }

  const cleanedData = scientistNames.join("\n");

  fs.writeFileSync("scientist_names_cleaned.txt", cleanedData, "utf-8");

  console.log("Names extracted and saved to scientist_names_cleaned.txt");
});
