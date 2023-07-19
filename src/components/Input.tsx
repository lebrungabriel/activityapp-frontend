import React from "react";

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
  return (
    <div className="mb-6 w-full">
      <label
        htmlFor={props.htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.text}
      </label>
      <input
        type={props.type}
        id={props.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-400 focus:border-indigo-400 block w-full p-2.5 placeholder-gray-400 outline-none"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

export default Input;
