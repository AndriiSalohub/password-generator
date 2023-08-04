import { FC, useState } from "react";

export const PasswordInput: FC = () => {
    const [value, setValue] = useState<string>("");

    return (
        <input
            type="text"
            className="mt-4 p-3 w-80 font-primary text-xl outline-none bg-secondary"
            placeholder="Your password"
            value={value}
        />
    );
};
