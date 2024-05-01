import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "cqdetdev",
    description: "Welcome to the worst possible CSS job of all time!",
};

export const viewport: Viewport = {
    themeColor: "#0a0d15",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            style={{
                scrollBehavior: "smooth",
            }}
        >
            <body className={inter.className}>{children}</body>
        </html>
    );
}
