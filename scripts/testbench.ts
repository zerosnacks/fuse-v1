// Common ways of scripted interacting with the Fuse-SDK

// Vendor
import Joi from "joi";
import { providers } from "ethers";

// Utilities
import { validateEnvConfig } from "./utilities/validateConfig";

// Fuse
import { Fuse } from "./sdk/Fuse";

// Validate values from .env file
const { CHAIN_ID, ETH_RPC_URL } = validateEnvConfig(
  ".env",
  Joi.object({
    CHAIN_ID: Joi.number().default(1),
    ETH_RPC_URL: Joi.string().default(""),
  })
);

const main = async () => {
  const provider = new providers.JsonRpcProvider(ETH_RPC_URL);
  const fuse = new Fuse(provider, CHAIN_ID);

  const comptrollers = await fuse.getComptrollersOfAllPools();

  console.log(comptrollers);
};

main().catch((error) => {
  throw error;
});
