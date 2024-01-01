const fs = require("fs");

fs.readFile("scientist_names4.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = data.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    fs.appendFileSync("scientist_names_cleaned.txt", "\n" + line, "utf-8");
  }
});
