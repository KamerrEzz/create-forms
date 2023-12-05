import { useInputs } from "../Store/Inputs";
import { TextInputBtn, TextInputOptions } from "./froms/TextInput";

const FormOptions = () => {
  const inputEdit = useInputs(state => state.edit)

  const inputType = {
    textinput: <TextInputOptions />
  }

  return (
    <div className="bg-gray-900 w-full h-screen overflow-y-auto grid grid-cols-2 grid-rows-6 gap-3 p-3">
      {inputEdit && inputType[inputEdit.type] }
      {!inputEdit && <><TextInputBtn /></> }
    </div>
  );
};

export default FormOptions;
