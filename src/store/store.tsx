import { ChangeEvent } from "react";
import { create } from "zustand";

type State = {
    password: string;
    passwordLength: number;
    includeUpper: boolean;
    includeLower: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    isGenerated: boolean;
    strength: string;
};

type Actions = {
    handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
    checkStrength: () => void;
    setPassword: (newPassword: State["password"]) => void;
    setPasswordLength: (length: State["passwordLength"]) => void;
};

export const useStore = create<State & Actions>((set) => ({
    password: "",
    passwordLength: 0,
    includeUpper: false,
    includeLower: false,
    includeNumbers: false,
    includeSymbols: false,
    isGenerated: false,
    strength: "",
    handleSelect: (e: ChangeEvent<HTMLInputElement>) =>
        set(() => ({
            [e.target.name]: e.target.checked,
        })),

    checkStrength: () =>
        set((state) => ({
            strength:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
                    state.password
                )
                    ? "strong"
                    : /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/.test(
                          state.password
                      )
                    ? "medium"
                    : "weak",
        })),

    setPassword: (newPassword) =>
        set(() => ({
            password: newPassword,
        })),

    setPasswordLength: (length) =>
        set(() => ({
            passwordLength: length,
        })),
}));
