import { FC, useState } from "react";

export const PasswordLength: FC = () => {
    const [value, setValue] = useState<number>(0);
    console.log(value);
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
                value={value}
                min={0}
                max={15}
                step={1}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={(e) => setValue(+e.target.value)}
            />
        </>
    );
};
