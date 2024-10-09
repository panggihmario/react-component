import { ComponentPropsWithoutRef, forwardRef } from "react";
type InputProps = {
  label? : string;
  id : string;
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>( ({id, label}, ref) => {
  return ( 
    <div className="grid gap-2">
      <label className="text-sm block" htmlFor={id}>{label}</label>
      <div className="border border-gray-400 py-2 px-4 rounded-lg  ">
        <input className="w-full focus:outline-none" id={id} type="text" ref={ref} />
      </div>
    </div>
   );
})
Input.displayName = 'Input';
export default Input;