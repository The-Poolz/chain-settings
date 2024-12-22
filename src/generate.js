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
        name: data.chainInfo.name // Retrieve chain name from chainInfo
    });
});

// Generate the dropdown options dynamically
const dropdownOptions = fileList
    .map(
        (chain) =>
            `<option value="${chain.chainId}.json">${chain.name}</option>`
    )
    .join("\n");

// Read the source index.html
let indexHtml = fs.readFileSync(indexSource, "utf8");

// Replace the placeholder in the index.html
indexHtml = indexHtml.replace(
    "{{CHAIN_OPTIONS_PLACEHOLDER}}",
    `<option value="" disabled selected>Select a chain...</option>\n${dropdownOptions}`
);

// Write the updated index.html to the output directory
fs.writeFileSync(indexDestination, indexHtml);
console.log(`Updated index.html with dropdown options at ${indexDestination}`);
