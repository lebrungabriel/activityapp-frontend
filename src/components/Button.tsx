import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className="bg-indigo-400 py-3 rounded-2xl text-center text-white font-semibold shadow-md cursor-pointer"
    >
      {props.text}
    </div>
  );
};

export default Button;
