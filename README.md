# Chain Settings

Chain Settings is a simple project designed to dynamically generate and display JSON configurations for various blockchain chains. This project uses Node.js and GitHub Pages to automate deployments and provide a user-friendly interface to interact with the chain settings.

## URL

https://the-poolz.github.io/chain-settings/


## Features

- **Dynamic JSON File Generation**: Generates JSON files for each available blockchain chain.
- **Interactive Dropdown**: Provides a dropdown menu to select and view chain-specific JSON data.
- **JSON Viewer**: Displays the JSON data in a visually structured format using the `JSONEditor` library.
- **Automated Deployment**: Deploys the generated files to GitHub Pages using GitHub Actions.

## Project Structure

- `deploy.yml`: GitHub Actions workflow file for automated deployment and issue-triggered builds.
- `generate.js`: Script to generate JSON files and update `index.html` with chain options.
- `index.html`: Frontend to interact with and display JSON data for selected chains.
- `.gitignore`: Specifies files and directories to exclude from version control.
- `LICENSE`: Licensing information.
- `package.json`: Node.js project metadata and script definitions.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/The-Poolz/chain-settings.git
   cd chain-settings
   ```

### Usage

1. Generate the JSON files and update `index.html`:

   ```bash
   npm run generate
   ```

   This will create a `dist` folder containing the generated files.

2. Serve the `dist` directory to view the application locally.

### Deployment

This project uses GitHub Actions to deploy to GitHub Pages:

1. Push changes to the `master` branch (or your default branch).
2. Open an issue with the body `Update` to trigger a manual deployment.

The workflow will build the project, generate the `dist` folder, and deploy the files to GitHub Pages.

## File Descriptions

### `deploy.yml`

Defines a GitHub Actions workflow with the following jobs:

- **Build**: Generates JSON files and prepares the `dist` folder.
- **Deploy**: Publish the content to GitHub Pages.

### `generate.js`

This script:

- Uses `@poolzfinance/reacthelper` to fetch chain data.
- Creates JSON files for each chain in the `dist` directory.
- Dynamically updates `index.html` to include options for each chain.

### `index.html`

Provides a simple UI with:

- A dropdown to select chains.
- Integration with `JSONEditor` for JSON data display.

### `.gitignore`

Excludes build artifacts, dependencies, and temporary files from version control.

### `package.json`

Specifies the project details and includes the `generate` script.

## License

This project is licensed under the [ISC License](LICENSE).

## Contributing

Feel free to open issues or submit pull requests to enhance the project.

