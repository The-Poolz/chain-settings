import { AVAILABLE_CHAINS } from "@poolzfinance/reacthelper";

// Utility function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Dynamically generate JSON response
(async () => {
    const chainId = getQueryParam("chainId");

    if (!chainId) {
        document.body.innerHTML = JSON.stringify({
            error: "chainId query parameter is required.",
        });
        return;
    }

    try {
        const config = await loadConfig(parseInt(chainId));
        document.body.innerHTML = JSON.stringify(config, null, 2);
    } catch (error) {
        document.body.innerHTML = JSON.stringify({ error: error.message });
    }
})();

// Load configuration function
async function loadConfig(chainId) {
    if (!AVAILABLE_CHAINS.has(chainId)) {
        throw new Error(`Config for Chain ID ${chainId} not found.`);
    }
    return AVAILABLE_CHAINS.get(chainId) || null;
}
