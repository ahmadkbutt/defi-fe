"use client";
import { Button } from "flowbite-react";
import { useSDK } from "@metamask/sdk-react";
import { ICoinBaseAuthProps } from "@/app/components/extended/buttons/CoinBaseAuth/interface";
import Image from "next/image";
import CoinBaseSVG from "@/assets/svg/Coinbase-icon-symbol.svg";

const CoinBaseAuth = ({ handleAuth }: ICoinBaseAuthProps) => {
  const { sdk, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };
  return (
    <>
      <Button color="gray" disabled={connecting} onClick={connect}>
        <Image
          src={CoinBaseSVG}
          alt="CoinBase Logo"
          className="w-6 h-5 me-2 -ms-1"
        />
        Connect with Coinbase
      </Button>
    </>
  );
};

export default CoinBaseAuth;
