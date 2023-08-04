/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#131219",
                secondary: "#24232b",
                strength: "#f7cd69",
                succsess: "#a4ffaf",
            },
            fontFamily: {
                primary: "Kanit, sans-serif",
                secondary: "Ubuntu, sans-serif",
            },
            colors: {
                primary: "#24232b",
                secondary: "#a4ffaf",
            },
            fontSize: {
                md: "16px",
            },
            borderColor: {
                primary: "#a4ffaf",
            },
        },
    },
    plugins: [],
};
