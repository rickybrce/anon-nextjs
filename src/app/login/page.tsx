"use client"; // This is a client component
import Web3 from "web3";
import { useState } from 'react';
import ConnectWalletButton from "../components/ConnectWalletButton";
import mobileCheck from "../helpers/mobileCheck";
import getLinker from "../helpers/deepLink";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const onPressConnect = async () => {
    setLoading(true);

    try {
      const yourWebUrl = "mysite.com"; // Replace with your website domain
      const deepLink = `https://metamask.app.link/dapp/${yourWebUrl}`;
      const downloadMetamaskUrl = "https://metamask.io/download.html";

      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
      } else if (mobileCheck()) {
        // Mobile browser
        const linker = getLinker(downloadMetamaskUrl);
        linker.openURL(deepLink);
      } else {
        window.open(downloadMetamaskUrl);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const onPressLogout = () => setAddress("");

  return (
    <div className="App">
      <header className="App-header p-4 flex justify-center">
        <ConnectWalletButton
          onPressConnect={onPressConnect}
          onPressLogout={onPressLogout}
          loading={loading}
          address={address}
        />
      </header>
    </div>
  );
};