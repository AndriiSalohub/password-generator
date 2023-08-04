import { FC } from "react";
import { PasswordInput } from "../components/PasswordInput";
import { PasswordSettings } from "../components/PasswordSettings";

export const App: FC = () => {
    return (
        <>
            <h1 className="text-xl text-center text-gray-600 font-secondary">
                Password Generator
            </h1>
            <PasswordInput />
            <PasswordSettings />
        </>
    );
};
