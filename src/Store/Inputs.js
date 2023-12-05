import { create } from "zustand";

export const useInputs = create((set) => ({
  inputs: [],
  edit: false,
  inputsN: 0,
  addInputs: (input) => set((state) => ({ inputs: [...state.inputs, input] })),
  setInputs: (inputs) => set(() => ({ inputs: inputs })),
  setEdit: (id) => set(() => ({ edit: id })),
  plusInput: () => set((state) => ({ inputsN: state.inputsN + 1 })),
  lessInput: () => set((state) => ({ inputsN: state.inputsN - 1 })),
}));
