import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xeA27E4cb972a453bEf304c93E421bC2b466a15b1");

(async () => {
    try {
        // Log the current roles.
        const allRoles = await token.roles.getAll();

        console.log("👀 Roles that exist right now:", allRoles);

        // Revoke all the superpowers your wallet had over the ERC-20 contract.
        await token.roles.setAll({
            admin: [],
            minter: ["0xCf3a0Bc10ce05B0807d642C3DCdc4778c5FB5490"],
        });
        console.log(
            "🎉 Roles after revoking ourselves",
            await token.roles.getAll()
        );
        console.log(
            "✅ Successfully revoked our superpowers from the ERC-20 contract"
        );
    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO trasury", error);
    }
})();
