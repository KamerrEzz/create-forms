
import { useEffect, useState } from "react";
import { useInputs } from "../Store/Inputs";
import { TextInput } from "./froms/TextInput";

const FormBuilder = () => {
  
  const [inputs, setInputs] = useState([])
  const inputState = useInputs(state => state.inputs)
  const inputEdit = useInputs(state => state.edit)

  useEffect(() => {
    setInputs(inputState)
  }, [inputEdit, inputState])

  const inputType = {
    textinput: TextInput
  }

  return (
    <div className="px-32 py-3 w-full h-screen">
      <div className="bg-gray-900 p-3 w-full h-full overflow-y-auto flex flex-col gap-2">
        {inputs.map(r => {
          const Input = inputType[r.type]
          return <Input builder id={r.id} label={r.attributes.label} placeholder={r.attributes.placeholder} key={r.id} />
        })}
      </div>
    </div>
  );
};

export default FormBuilder;
