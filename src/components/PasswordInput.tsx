import { FC } from "react";
import { useStore } from "../store/store";

export const PasswordInput: FC = () => {
    const { password } = useStore();

    async function copyTextToClipboard(text: string) {
        if ("clipboard" in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand("copy", true, text);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(password);
    };

    return (
        <div className="relative">
            <input
                type="text"
                className="mt-4 p-3 w-80 text-gray-500 text-xl outline-none bg-secondary font-bold"
                placeholder="Your password"
                value={password}
                disabled
            />
            <button
                className="absolute w-6 h-6 top-7 right-3"
                onClick={handleCopyClick}
            >
                <img
                    src="https://i.ibb.co/84BZkYV/copyclipboard.png"
                    alt="copy to clipboard icon"
                />
            </button>
        </div>
    );
};
