import { createConfig } from "wagmi";
import { getDefaultConfig } from "connectkit";
import { polygon, polygonMumbai, sepolia, mainnet } from "wagmi/chains";

export const wagmiConfig = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: import.meta.env.VITE_ALCHEMY_ID || "", // or infuraId
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || "",

    // Required
    appName: "LGHO Digital ID",
    chains: [polygonMumbai, polygon, sepolia, mainnet],

    // Optional
    appDescription: "The only ID you will need",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
