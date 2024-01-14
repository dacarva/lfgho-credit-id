import "./App.css";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { SmartWalletProvider } from "./context/smart-wallet";
import { wagmiConfig } from "./config";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/NavBar";
import TokenSender from "./components/TokenSender";

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        <SmartWalletProvider>
          <Toaster />
          <>
            <div className="fixed top-0 left-0 right-0">
              <Navbar />
            </div>
            <div className="mt-[100px]">
              <h1 className="text-3xl text-center font-bold underline">
                Account Abstraction test
              </h1>
              <TokenSender />
            </div>
          </>
        </SmartWalletProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
