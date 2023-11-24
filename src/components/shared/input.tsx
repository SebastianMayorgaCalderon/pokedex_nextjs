import React from "react";

type Props = {
  value: string | number;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
};

const Input = (props: Props) => {
  return (
    <input
      className="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm "
      {...props}
    />
  );
};

export default Input;
