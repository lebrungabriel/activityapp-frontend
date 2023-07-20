import React from "react";

type Props = {
  htmlFor: string; // The "for" attribute value of the label element
  id: string; // The "id" attribute value of the select element
  type: string; // The "name" attribute value of the select element
  text: string; // The label text for the dropdown
  categories: string[]; // An array of string values representing dropdown options
  value: string; // The selected value of the dropdown
  onChange: React.ChangeEventHandler<HTMLSelectElement>; // Event handler for dropdown value change
};

const Dropdown = (props: Props) => {
  return (
    <>
      {/* Container div for the dropdown */}
      <div className="mb-6 w-full relative">
        {/* Uncomment the label element if you want to display a label for the dropdown */}
        {/* <label htmlFor={props.htmlFor}>{props.text}</label> */}

        {/* Select element representing the dropdown */}
        <select id={props.type} name={props.type} onChange={props.onChange}>
          {/* Default option to prompt user to choose an option */}
          <option value="">Choisir une {props.text.toLowerCase()}</option>

          {/* Map through the categories array to create dropdown options */}
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
