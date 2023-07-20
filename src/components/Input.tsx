import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  htmlFor: string; // The "for" attribute value of the label element
  id: string; // The "id" attribute value of the input element
  type: string; // The type of the input element (e.g., "text", "password", etc.)
  placeholder: string; // The placeholder text for the input element
  text: string; // The label text for the input element
  value: string; // The value of the input element
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input value change
};

function Input(props: Props) {
  // State to manage password visibility toggle (used for password input type)
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility (convert password input to text and vice versa)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6 w-full relative">
      {/* Label element for the input */}
      <label
        htmlFor={props.htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.text}
      </label>

      {/* Input element */}
      <input
        type={
          // If the input type is "password", toggle visibility based on the state
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

      {/* Button to toggle password visibility (visible only for password input type) */}
      {props.type === "password" && (
        <button
          type="button"
          className="absolute bottom-3 right-3 text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {/* Display eye icon when password is hidden and eye-off icon when password is visible */}
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
}

export default Input;
