"use client";
import MetaMaskSVG from "@/app/components/base/svg/MetaMask/MetaMask";
import {Button} from "flowbite-react";
import {IMetaMaskAuthProps} from "@/app/components/extended/buttons/MetaMaskAuth/interface";
import {useSDK} from "@metamask/sdk-react";

const MetaMaskAuth = ({handleAuth}: IMetaMaskAuthProps) => {
    const {sdk, connecting, account} = useSDK();

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
                <MetaMaskSVG/>
                Connect with MetaMask
            </Button>
        </>
    );
};

export default MetaMaskAuth;
