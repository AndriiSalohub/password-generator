import { ChangeEvent, FC, useState } from "react";

type TAdditionalSettings = {
    upper: boolean;
    lower: boolean;
    number: boolean;
    symbols: boolean;
};

export const AdditionalSettings: FC = () => {
    const [settings, setsettings] = useState<TAdditionalSettings>({
        upper: false,
        lower: false,
        number: false,
        symbols: false,
    });

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setsettings((state) => ({
            ...state,
            [e.target.name]: e.target.checked,
        }));
    };

    console.log(value);

    return (
        <>
            <div className="flex items-center mt-4">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="upper"
                    onChange={(e) => handleSelect(e)}
                />{" "}
                <span className="font-primary text-sm text-white ml-2">
                    Include Uppercase Letters
                </span>
            </div>
            <div className="flex items-center mt-3">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="lower"
                />{" "}
                <span className="font-primary text-sm text-white ml-2">
                    Include Lowercase Letters
                </span>
            </div>
            <div className="flex items-center mt-3">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="numbers"
                />{" "}
                <span className="font-primary text-sm text-white ml-2">
                    Include Numbers
                </span>
            </div>
            <div className="flex items-center mt-3">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="symbols"
                />{" "}
                <span className="font-primary text-sm text-white ml-2">
                    Include Symbols
                </span>
            </div>
        </>
    );
};
