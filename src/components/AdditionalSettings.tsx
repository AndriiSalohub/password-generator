import { FC } from "react";
import { useStore } from "../store/store";

export const AdditionalSettings: FC = () => {
    const store = useStore();

    return (
        <>
            <div className="flex items-center mt-4">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="includeUpper"
                    onChange={(e) => store.handleSelect(e)}
                />{" "}
                <span className="font-primary text-md text-white ml-2">
                    Include Uppercase Letters
                </span>
            </div>
            <div className="flex items-center mt-3">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="includeLower"
                    onChange={(e) => store.handleSelect(e)}
                />{" "}
                <span className="font-primary text-md text-white ml-2">
                    Include Lowercase Letters
                </span>
            </div>
            <div className="flex items-center mt-3">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="includeNumbers"
                    onChange={(e) => store.handleSelect(e)}
                />{" "}
                <span className="font-primary text-md text-white ml-2">
                    Include Numbers
                </span>
            </div>
            <div className="flex items-center mt-3">
                {" "}
                <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border text-primary checked:bg-blue-500 checked:text-white relative after:content-[''] after:w-full after:h-full after:top-3 after:left-2"
                    name="includeSymbols"
                    onChange={(e) => store.handleSelect(e)}
                />{" "}
                <span className="font-primary text-md text-white ml-2">
                    Include Symbols
                </span>
            </div>
        </>
    );
};
