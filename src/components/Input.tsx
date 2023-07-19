import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  htmlFor: string;
  id: string;
  type: string;
  placeholder: string;
  text: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6 w-full relative">
      <label
        htmlFor={props.htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.text}
      </label>
      <input
        type={
          props.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : props.type
        }
        id={props.id}
        className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-400 focus:border-indigo-400 block w-full p-2.5 placeholder-gray-400 outline-none"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
      {props.type === "password" && (
        <button
          type="button"
          className="absolute bottom-3 right-3 text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
}

export default Input;
