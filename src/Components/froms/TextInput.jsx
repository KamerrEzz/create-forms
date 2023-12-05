import { MdTextFields } from "react-icons/md";
import { Input } from "../ui/Input";
import { useInputs } from "../../Store/Inputs";
import { useState } from "react";

export const TextInput = ({ id, label, placeholder }) => {
  const inputsN = useInputs((state) => state.inputsN);
  const inputs = useInputs((state) => state.inputs);
  const getInput = inputs.find((r) => r.id == inputsN - 1);
  console.log({getInput});
  return (
    <div className="bg-gray-800/50 rounded-sm p-3">
      <label className="text-white font-light text-sm" htmlFor="">
        {label ?? getInput.attributes.label}
      </label>
      <Input id={id} disable placeholder={placeholder ?? getInput.attributes.placeholder} />
    </div>
  );
};

export const TextInputOptions = () => {
  const inputsN = useInputs((state) => state.inputsN);
  const setInputs = useInputs((state) => state.setInputs);
  const setEdit = useInputs((state) => state.setEdit);
  let inputs = useInputs((state) => state.inputs);
  let getInput = inputs.find((r) => r.id == inputsN - 1);
  let getInputIndex = inputs.findIndex((r) => r.id == inputsN - 1);
  const [change, setChange] = useState();

  const onChange = (input) => {
    setChange((state) => ({
      ...state,
      [input.target.id]: input.target.value,
    }));
  };

  const updateChange = () => {
    getInput.attributes.label = change.label;
    getInput.attributes.placeholder = change.placeholder;
    inputs[getInputIndex] = getInput;
    setInputs(inputs);
    setChange(null)
    setEdit(false)
  };

  return (
    <div className="col-span-full row-span-full  w-full h-full rounded-sm p-3 flex flex-col gap-2">
      <div className="bg-gray-800 p-2 rounded-md">
        <label className="text-white text-sm" htmlFor="">
          Titulo del Label *
        </label>
        <Input
          onChange={onChange}
          name="label"
          id="label"
          placeholder="Nombre del usuario"
        />
      </div>
      <div className="bg-gray-800 p-2 rounded-md">
        <label className="text-white text-sm" htmlFor="">
          Placeholder *
        </label>
        <Input
          onChange={onChange}
          name="placeholder"
          id="placeholder"
          placeholder="Kamerr Ezz"
        />
      </div>
      <button
        onClick={updateChange}
        className="bg-gray-500 rounded-md text-white px-2 py-1"
      >
        Guardar
      </button>
    </div>
  );
};

export const TextInputBtn = () => {
  const addInputs = useInputs((state) => state.addInputs);
  const inputsN = useInputs((state) => state.inputsN);
  const plusInput = useInputs((state) => state.plusInput);
  const setEdit = useInputs((state) => state.setEdit);

  const onClick = () => {
    const input = {
      id: inputsN,
      type: "textinput",
      attributes: {
        placeholder: "placeholder",
        label: "label",
      },
    };
    addInputs(input);
    plusInput();
    setEdit({
      id: inputsN,
      type: "textinput",
    });
  };

  return (
    <div
      className="border border-gray-800 flex flex-col items-center justify-center rounded-md hover:bg-gray-800 cursor-pointer"
      onClick={onClick}
    >
      <MdTextFields className="text-white text-4xl" />
      <p className="text-white">Text Input</p>
    </div>
  );
};
