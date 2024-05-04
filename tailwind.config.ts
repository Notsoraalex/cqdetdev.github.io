import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden",
                    },
                    "100%": {
                        width: "100%",
                    },
                },
                blink: {
                    "50%": {
                        borderColor: "transparent",
                    },
                    "100%": {
                        borderColor: "white",
                    },
                },
            },
            animation: {
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
            },
        },
        animation: {
            type: "type 2.7s ease-out .8s infinite alternate both",
        },
        keyframes: {
            type: {
                "0%": { transform: "translateX(0ch)" },
                "5%, 10%": { transform: "translateX(1ch)" },
                "15%, 20%": { transform: "translateX(2ch)" },
                "25%, 30%": { transform: "translateX(3ch)" },
                "35%, 40%": { transform: "translateX(4ch)" },
                "45%, 50%": { transform: "translateX(5ch)" },
                "55%, 60%": { transform: "translateX(6ch)" },
                "65%, 70%": { transform: "translateX(7ch)" },
                "75%, 80%": { transform: "translateX(8ch)" },
                "85%, 90%": { transform: "translateX(9ch)" },
                "95%, 100%": { transform: "translateX(11ch)" },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
