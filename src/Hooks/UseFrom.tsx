import { useState } from "react";

const useForm = <T extends object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = (value: string, key: keyof T) => {
    setState({
      ...state,
      [key]: value,
    });
  };
 
  const resetForm = () => {
    setState(initState);
  };

  return {
    ...state,
    form: state,
    onChange,
    resetForm,
  };
};

export default useForm;