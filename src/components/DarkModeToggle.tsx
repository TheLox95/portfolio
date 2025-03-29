import { useCallback, useState } from "react";

export const DarkModeToggle = (props: {
  initialVal: boolean;
  onChange: (checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(props.initialVal);

  const onChange: NonNullable<
    React.InputHTMLAttributes<HTMLInputElement>["onChange"]
  > = useCallback((e) => {
    setChecked(e.target.checked);
    props.onChange(e.target.checked);
  }, []);

  return (
    <label
      htmlFor="toggleTwo"
      className="flex items-center cursor-pointer select-none text-dark dark:text-white"
    >
      <div className="relative">
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
          id="toggleTwo"
          className="peer sr-only"
        />
        <div className="block h-8 rounded-full dark:bg-gray-600 bg-black w-14"></div>
        <div className="absolute w-6 h-6 transition bg-white rounded-full dot dark:bg-dark-4 left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary text-black text-center">
          {checked ? <>&#9789;</> : <>&#9728;</>}
        </div>
      </div>
    </label>
  );
};
