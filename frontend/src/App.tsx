import "./App.css";
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { SmartWalletProvider } from "@/context/smart-wallet";
import { wagmiConfig } from "@/config";
import { Toaster } from "react-hot-toast";
// import Navbar from "@/components/NavBar";
import Navbar from "@/components/NavBarNew";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <ConnectKitProvider>
          <SmartWalletProvider>
            <Toaster />
            <>
              <div className="fixed top-0 left-0 right-0 z-10">
                <Navbar />
              </div>
              <div className="mt-[140px]">
                <Outlet />
              </div>
            </>
          </SmartWalletProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
