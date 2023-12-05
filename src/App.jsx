import FormOptions from "./Components/FormOptions";
import FormBuilder from "./Components/FormBuilder";

const App = () => {
  return (
    <div>
      <div className="grid grid-cols-[1fr_350px] h-screen">
        <FormBuilder />
        <FormOptions />
      </div>
    </div>
  );
};

export default App;
