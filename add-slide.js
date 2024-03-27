import fs from "fs";

const name = process.argv[2];

if (!name || isNaN(+name)) {
  console.log("Invalid file name");
  process.exit(1);
}

const dir = "src/content/slides";

const files = fs.readdirSync(dir);

files.sort().reverse();

const nameNum = +name;
const targetLength = 2;
const prefix = "0";

const newFileNumber = nameNum.toString();
const newFileName =
  prefix.repeat(targetLength - newFileNumber.length) + newFileNumber + ".md";

if (files.includes(newFileName)) {
  for (const file of files) {
    const fileName = file.slice(0, file.lastIndexOf("."));
    const fileNumber = +fileName;
    if (fileNumber < nameNum) {
      break;
    }
    const newSlideNumber = (fileNumber + 1).toString();
    const newName =
      prefix.repeat(targetLength - newSlideNumber.length) +
      newSlideNumber +
      ".md";
    const oldPath = dir + "/" + file;
    const newPath = dir + "/" + newName;
    console.log("moving", oldPath, "to", newPath);
    fs.renameSync(oldPath, newPath);
  }
}

fs.writeFileSync(dir + "/" + newFileName, "");
