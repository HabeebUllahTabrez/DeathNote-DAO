import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
    "0xDD0caFEd1584AD792c8E719489BB94E2Ce6D1d91"
);

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Death Note",
                description:
                    "This NFT will grant you access to use the Death Note!",
                image: readFileSync("scripts/assets/deathNote.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
