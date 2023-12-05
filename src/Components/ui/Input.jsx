export const Input = ({
  disable = false,
  id = 1,
  inputtype = "text",
  placeholder = "text",
  onChange,
  name
}) => {
  return (
    <input
      disabled={disable}
      id={id}
      placeholder={placeholder}
      type={inputtype}
      onChange={onChange}
      name={name}
      className="text-sm bg-transparent outline-none border border-gray-600 rounded-md w-full p-1 text-white my-1"
    />
  );
};
