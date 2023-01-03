import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const options = [
    { label: "I want mild", value: "mild" },
    { label: 'I"d like spicy', value: "spicy" },
    { label: "Give me extra spicy", value: "extra_spicy" },
  ];

  const [selected, setSelected] = useState(null);

  const handleChange = (option) => {
    setSelected(option);
  };

  return (
    <Dropdown options={options} value={selected} onChange={handleChange} />
  );
}

export default DropdownPage;
