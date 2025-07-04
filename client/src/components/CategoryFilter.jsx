import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getCategories } from "../api/productApi";

const CategoryFilter = ({ selected, setSelected }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCategories().then((res) =>
      setOptions(res.data.map((cat) => ({ label: cat.name, value: cat.id })))
    );
  }, []);

  return (
    <Select
      isMulti
      options={options}
      value={selected}
      onChange={setSelected}
      placeholder="Filter by categories..."
    />
  );
};

export default CategoryFilter;
