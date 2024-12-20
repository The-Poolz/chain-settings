import { AVAILABLE_CHAINS } from "@poolzfinance/reacthelper"

export async function loadConfig(chainId: number): Promise<any> {
    if (!AVAILABLE_CHAINS.has(chainId)) {
        throw new Error(`Config for Chain ID ${chainId} not found.`)
    }
    return AVAILABLE_CHAINS.get(chainId) || null
}
