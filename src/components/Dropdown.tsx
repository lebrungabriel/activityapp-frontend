import React from "react";

type Props = {
  htmlFor: string;
  id: string;
  type: string;
  text: string;
  categories: string[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown = (props: Props) => {
  return (
    <>
      <div className="mb-6 w-full relative">
        {/* <label htmlFor={props.htmlFor}>{props.text}</label> */}
        <select id={props.type} name={props.type} onChange={props.onChange}>
          <option value="">Choisir une {props.text.toLowerCase()}</option>
          {props.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
