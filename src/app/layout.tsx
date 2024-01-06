import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import CONSTANTS from "@/constants/constants";
import {Roboto} from "next/font/google";

const roboto = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});
const {APP_NAME, DESCRIPTION} = CONSTANTS;
export const metadata: Metadata = {
    title: APP_NAME,
    description: DESCRIPTION,
};

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={roboto.className}>{children}</body>
        </html>
    );
}
