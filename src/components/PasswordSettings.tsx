import { FC } from "react";
import { AdditionalSettings } from "./AdditionalSettings";
import { PasswordLength } from "./PasswordLength";
import { PasswordStrength } from "./PasswordStrength";

export const PasswordSettings: FC = () => {
    return (
        <div className="bg-secondary mt-5 font-primary p-5">
            <PasswordLength />
            <AdditionalSettings />
            <PasswordStrength />
        </div>
    );
};
