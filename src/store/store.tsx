import { ChangeEvent } from "react";
import { create } from "zustand";

type TStore = {
    password: string;
    passwordLength: number;
    includeUpper: boolean;
    includeLower: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
    isGenerated: boolean;
    strength: string;
    checkStrength: () => void;
    setPassword: (newPassword: string) => void;
    setPasswordLength: (length: number) => void;
};

export const useStore = create<TStore>((set) => ({
    password: "",
    passwordLength: 0,
    includeUpper: false,
    includeLower: false,
    includeNumbers: false,
    includeSymbols: false,
    isGenerated: false,
    strength: "",
    handleSelect: (e: ChangeEvent<HTMLInputElement>) =>
        set((state) => ({
            ...state,
            [e.target.name]: e.target.checked,
        })),
    checkStrength: () =>
        set((state) => ({
            ...state,
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
        set((state) => ({
            ...state,
            password: newPassword,
        })),
    setPasswordLength: (length) =>
        set((state) => ({
            ...state,
            passwordLength: length,
        })),
}));
