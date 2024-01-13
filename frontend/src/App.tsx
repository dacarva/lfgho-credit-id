import { ConnectKitProvider } from "connectkit";
import Navbar from "./components/NavBar";
import TokenSender from "./components/TokenSender";

function App() {
  return (
    <div>
      <ConnectKitProvider>
        <div className="fixed top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="mt-[100px]">
          <h1 className="text-3xl text-center font-bold underline">
            Account Abstraction test
          </h1>
          <TokenSender />
        </div>
      </ConnectKitProvider>
    </div>
  );
}

export default App;
