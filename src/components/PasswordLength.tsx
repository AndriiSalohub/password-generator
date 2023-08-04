import { FC, useState } from "react";
import "./PasswordLength.css";

export const PasswordLength: FC = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-white text-sm">Character Length</h2>
                <span className="text-2xl font-secondary text-secondary">
                    {value}
                </span>
            </div>
            <input
                type="range"
                className="relative"
                value={value}
                min={0}
                max={15}
                step={1}
                onChange={(e) => setValue(+e.target.value)}
            />
        </>
    );
};
