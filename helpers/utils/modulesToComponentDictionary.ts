import { Interface } from "readline";

const modulesToComponentDictionary: ModulesToComponentDictionary = {
	nftGallery: {
		moduleComponents: ["nftGallery", "nftCard"],
    },
    nftCard: {
		moduleComponents: ["nftCard", "primaryButton"]
    },
	nftDetailsPopUp: {
		moduleComponents: ["nftDetailsPopUp", "primaryButton"],
		hooks: ["useComponentVisible"],
	},
	primaryButton: {
		moduleComponents: ["primaryButton"],
	},
	snapshotBox: {
		moduleComponents: ["snapshotBox", "primaryButton"],
		routes: ["snapshots"],		
	},
};
export default modulesToComponentDictionary

interface ModulesToComponentDictionary {
	[key:string]: ModulesToComponentDictionaryElement,
}

interface ModulesToComponentDictionaryElement{
	moduleComponents: string[],
	hooks?: string[],
	routes?: string[],
} 