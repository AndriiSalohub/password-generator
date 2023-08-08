import { FC } from "react";
import {
    lowerCaseLetters,
    numbers,
    specialCharacters,
    upperCaseLetters,
} from "../data/characters";
import { useStore } from "../store/store";

export const GenerateBtn: FC = () => {
    const {
        checkStrength,
        includeUpper,
        includeLower,
        includeNumbers,
        includeSymbols,
        setPassword,
        passwordLength,
    } = useStore();

    const handlePassword = () => {
        if (
            !includeUpper &&
            !includeLower &&
            !includeNumbers &&
            !includeSymbols
        ) {
            console.log("You must Select at least one option");
        }

        let characterList = "";

        if (includeLower) {
            characterList += lowerCaseLetters;
        }

        if (includeUpper) {
            characterList += upperCaseLetters;
        }

        if (includeNumbers) {
            characterList += +numbers;
        }

        if (includeSymbols) {
            characterList += specialCharacters;
        }

        setPassword(createPassword(characterList));
    };

    const createPassword = (characterList: string) => {
        let password = "";
        const characterListLength = characterList.length;

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(
                Math.random() * characterListLength
            );

            password += characterList.charAt(characterIndex);
        }

        return password;
    };

    return (
        <button
            className="w-full bg-succsess border border-primary mt-5 p-3 font-primary hover:border  hover:bg-primary hover:text-secondary ease-in-out duration-300 hover:duration-300 hover:ease-in-out"
            onClick={() => {
                {
                    handlePassword();
                    checkStrength();
                }
            }}
        >
            Generate
        </button>
    );
};
