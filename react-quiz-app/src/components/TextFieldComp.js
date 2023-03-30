import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };

  return (
    <div className="mt-6">
      <FormControl fullWidth size="small">
        <div className="bg-amber-500 min-w-full">
          <TextField className="w-[100%]"
            onChange={handleChange}
            variant="outlined"
            label="Amount of Questions"
            type="number"
            size="small"
          />
        </div>
      </FormControl>
    </div>
  );
};

export default TextFieldComp;
