"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";
import MetaMaskAuth from "@/app/components/extended/buttons/MetaMaskAuth/MetaMaskAuth";
import CONSTANTS from "@/constants/constants";
import Image from "next/image";
import LoginSVG from "@/assets/svg/12291223_Wavy_Tech-28_Single-10.svg";
import LogoSVG from "@/assets/svg/logo.svg";
import CoinbaseAuth from "@/app/components/extended/buttons/CoinBaseAuth/CoinbaseAuth";

const LoginPage = () => {
  const { APP_NAME, HOST } = CONSTANTS;
  const sdkOptions = {
    logging: { developerMode: true },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: APP_NAME,
      url: HOST,
    },
  };

  return (
    <div className="container mx-auto grid grid-cols-2 place-items-center">
      <div className="container mx-auto border-r-2">
        <Image priority src={LoginSVG} alt="Login Authentication" />
      </div>
      <div className="container mx-auto grid">
        <div className=" grid place-items-center">
          <Image src={LogoSVG} alt="Logo" width={200} height={200} />
          <div>
            <h1 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome to {APP_NAME}
            </h1>
            <h2 className="mt-5 text-center text-xl leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="mt-5">
            <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
              <MetaMaskAuth />
            </MetaMaskProvider>
          </div>
          <div className="mt-5">
            <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
              <CoinbaseAuth />
            </MetaMaskProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
