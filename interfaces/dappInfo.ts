export interface DappInfo {
	chain: string;
	isEVM: boolean;
	isTestnet: boolean;
	testnet?: string;
	useBackend: boolean;
	backendProvider?: string;
	toolkitType?: string;
	hasSmartContract: boolean;
	modules: [string] | null;
	alchemyAPIKey: string | "demo";
}
