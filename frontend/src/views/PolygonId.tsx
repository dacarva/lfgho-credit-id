import { useWalletClient } from "wagmi";

import {
  LightSmartContractAccount,
  getDefaultLightAccountFactoryAddress,
} from "@alchemy/aa-accounts";
import { AlchemyProvider } from "@alchemy/aa-alchemy";
import { WalletClientSigner, type SmartAccountSigner } from "@alchemy/aa-core";
import { sepolia } from "wagmi";

const ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

const getAlchemyURL =
  "https://eth-sepolia.g.alchemy.com/v2/fG60Y4yYanY6eZwGrK4AVXy3MqdiVSRN";

const PolygonId = () => {
  const { data: walletClient } = useWalletClient();

  const handleClick = async () => {
    console.log("Button clicked");
    if (!walletClient) throw new Error("Wallet client not found");
    const signer: SmartAccountSigner = new WalletClientSigner(
      walletClient,
      "json-rpc" // signerType
    );
    if (!signer) throw new Error("Signer not found");
    const chain = sepolia;

    try {
      const provider = new AlchemyProvider({
        rpcUrl: getAlchemyURL,
        chain,
        entryPointAddress: ENTRYPOINT_ADDRESS,
        opts: {
          txMaxRetries: 10,
          txRetryIntervalMs: 2_000,
          txRetryMulitplier: 1.5,
        },
      }).connect((rpcClient) => {
        return new LightSmartContractAccount({
          rpcClient,
          owner: signer,
          chain,
          factoryAddress: getDefaultLightAccountFactoryAddress(chain),
        });
      });
      const address = await provider.getAddress();
      console.log("🚀 ~ handleClick ~ address:", address);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default PolygonId;
