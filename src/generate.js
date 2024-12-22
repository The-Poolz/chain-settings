import { AVAILABLE_CHAINS } from "@poolzfinance/reacthelper";
import fs from "fs";
import path from "path";

const outputDir = "./dist"; // Directory for generated files
const indexSource = "./view/index.html"; // Source of index.html
const indexDestination = path.join(outputDir, "index.html");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Array to store metadata for the index
const fileList = [];

// Generate JSON files for each chain and collect metadata
AVAILABLE_CHAINS.forEach((data, chainId) => {
    const fileName = `${chainId}.json`;
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Generated: ${filePath}`);

    // Add to the list
    fileList.push({
        chainId,
        name: data.name,
        fileName,
        url: fileName,
    });
});

// Create the list.json file
const listFilePath = path.join(outputDir, "list.json");
fs.writeFileSync(listFilePath, JSON.stringify(fileList, null, 2));
console.log(`Generated: ${listFilePath}`);

// Copy index.html to the output directory
fs.copyFileSync(indexSource, indexDestination);
console.log(`Copied index.html to ${indexDestination}`);
