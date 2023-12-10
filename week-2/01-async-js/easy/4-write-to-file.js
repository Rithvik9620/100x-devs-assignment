const fs = require("fs");

fs.writeFile("a.txt", "Replaced text", () => console.log("Replacement done"));
