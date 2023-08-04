/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#131219",
                secondary: "#24232b",
            },
            fontFamily: {
                primary: "Roboto, sans-serif",
                secondary: "Ubuntu, sans-serif",
            },
            colors: {
                primary: "#24232b",
                secondary: "#a4ffaf",
            },
            fontSize: {
                md: "16px",
            },
        },
    },
    plugins: [],
};
