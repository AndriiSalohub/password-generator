import { FC } from "react";
import { useStore } from "../store/store";

export const PasswordInput: FC = () => {
    const { password } = useStore();

    return (
        <input
            type="text"
            className="mt-4 p-3 w-80 text-gray-500 text-xl outline-none bg-secondary font-bold"
            placeholder="Your password"
            value={password}
        />
    );
};
