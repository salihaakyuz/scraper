const fs = require("fs");

fs.readFile("scientist_names_cleaned.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");
  const uniqueNamesSet = new Set(lines.map((name) => name.trim()));
  const uniqueNamesArray = Array.from(uniqueNamesSet);
  const uniqueNamesString = uniqueNamesArray.join("\n");
  fs.writeFile(
    "unique_scientists.txt",
    uniqueNamesString,
    "utf8",
    (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return;
      }
      console.log("Unique names written to unique_scientists.txt");
    }
  );
});
