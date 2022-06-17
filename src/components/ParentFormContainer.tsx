import { useState, useEffect } from "react";

import ProductPosition from "./ProductPosition";

const ParentFormContainer = () => {
  const [form, setForm] = useState({});

  const onCompleteFormHandler = (data: {}) => {
    setForm(data);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div>
      <ProductPosition onChange={onCompleteFormHandler} />
    </div>
  );
};

export default ParentFormContainer;
