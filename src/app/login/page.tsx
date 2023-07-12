"use client"; // This is a client component
import Web3 from "web3";
// Import the functions you need from the SDKs you need
import { useState } from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";
import mobileCheck from "../helpers/mobileCheck";
import getLinker from "../helpers/deepLink";
import axios from "axios";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import MetaMaskOnboarding from "@metamask/onboarding";
import { Preferences } from "@capacitor/preferences";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [valOne, setValOne] = useState("");
  const [valTwo, setValTwo] = useState("");
  const [valThree, setValThree] = useState("");

  //const [provider, setProvider] = useState("");
  const [mess, setMessage] = useState();
  const [signature, setSignature] = useState();

  const onPressConnect = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      //const yourWebUrl = "anon-nextjs.vercel.app"; // Replace with your website domain
      const yourWebUrl = process.env.NEXT_PUBLIC_DOMAIN;
      const deepLink = `https://metamask.app.link/dapp/${yourWebUrl}`;
      const downloadMetamaskUrl = "https://metamask.io/download.html";

      console.log("Website url: " + yourWebUrl);

      if (window?.ethereum?.isMetaMask) {
        // Desktop browser
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = Web3.utils.toChecksumAddress(accounts[0]);
        setAddress(account);
        const provider = new ethers.BrowserProvider(window.ethereum);

        if (account) {
          const baseUrl = "https://kinapiv2.tokensmarties.com/api/v1";
          const response = await axios.get(
            `${baseUrl}/login/request-siwe/${account}`
          );
          const messageToSign = response?.data;
          //console.log(messageToSign);

          if (!messageToSign) {
            throw new Error("Invalid message to sign");
          }

          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          const signature = await signer.signMessage(messageToSign);
          setAddress(address);

          //console.log("signature : " + signature);
          //console.log("provider : ", provider);
          //console.log("address : ", account);

          const bodyParams = {
            address: account,
            siweMessage: messageToSign,
            signature: signature,
          };

          const urlEncodedData = new URLSearchParams();
          urlEncodedData.append("address", bodyParams.address);
          urlEncodedData.append("siweMessage", bodyParams.siweMessage);
          urlEncodedData.append("signature", bodyParams.signature);

          //console.log("Form data: ", bodyParams);

          const headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          return fetch(`${baseUrl}/login/access-token`, {
            method: "POST",
            //body: bodyParams ? JSON.stringify(bodyParams) : null,
            body: urlEncodedData.toString(),
            //headers: headers,
            headers: headers
          }) .then(async (response) => response.json())
          .then(async (data) => {
            console.log("Success");
            await Preferences.set({
              key: "token",
              value: data.access_token,
            });
            //Redirect to dashboard
            router.push("/")
            if (response.status === 422) {
              console.log("Wrong login token");
              //await Preferences.remove({ key: "token" });
              //await Preferences.clear();
            }

            if (response.status === 401) {
            }

            if (!response.status.toString().startsWith("2")) {
            }

            if (response.status === 204) {
              return;
            }
          });

          //handleLogin(account);
        }
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

  /*const handleLogin = async (address: any) => {
    const baseUrl = "https://kinapiv2.tokensmarties.com/api/v1";
    const response = await axios.get(
      `${baseUrl}/login/request-siwe/${address}`
    );
    const messageToSign = response?.data;
    console.log(messageToSign);

    if (!messageToSign) {
      throw new Error("Invalid message to sign");
    }
  };*/

  async function onPressLogout() {
    await Preferences.remove({ key: "token" });
  };

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSign = async () => {
    /*const message = mess;
    const signer = await provider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
    setSignature(signature);
    setAddress(address);
    console.log("sig : " + signature);*/
  };

  return (
    <div className="App">
      <header className="App-header p-4 flex justify-center">
        <form method="post">
          <ConnectWalletButton
            onPressConnect={onPressConnect}
            onPressLogout={onPressLogout}
            loading={false}
            address={address}
          />
        </form>
      </header>
    </div>
  );
}
