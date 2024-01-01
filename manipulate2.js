const fs = require("fs");

fs.readFile("scientist_names2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (/^[A-Z][a-z]+, [A-Z][a-z]+$/.test(line)) {
      const [lastName, firstName] = line.split(", ").map((name) => name.trim());

      fs.appendFileSync(
        "scientist_names_cleaned.txt",
        "\n" + `${firstName} ${lastName}`,
        "utf-8"
      );
    }
  }
});
