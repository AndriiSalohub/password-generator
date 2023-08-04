import { FC } from "react";
import { PasswordLength } from "./PasswordLength";

export const PasswordSettings: FC = () => {
    return (
        <div className="bg-secondary mt-5 font-primary p-5">
            <PasswordLength />
        </div>
    );
};
