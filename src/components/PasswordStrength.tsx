import { FC } from "react";

export const PasswordStrength: FC = () => {
    return (
        <div className="bg-primary flex justify-between mt-5 p-4">
            <h2 className="font-secondary text-gray-600 text-md">Strength</h2>
            <ul className="flex gap-1">
                <li>
                    <input
                        type="checkbox"
                        className="appearance-none w-2 h-5 border checked:bg-strength"
                        disabled
                    />
                </li>
                <li>
                    <input
                        type="checkbox"
                        className="appearance-none w-2 h-5 border checked:bg-strength"
                        disabled
                    />
                </li>
                <li>
                    <input
                        type="checkbox"
                        className="appearance-none w-2 h-5 border checked:bg-strength"
                        disabled
                    />
                </li>
                <li>
                    <input
                        type="checkbox"
                        className="appearance-none w-2 h-5 border checked:bg-strength"
                        disabled
                    />
                </li>
            </ul>
        </div>
    );
};
