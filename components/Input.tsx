function Input({
  placeholder,
  label,
  ...props
}: {
  placeholder?: string;
  label?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className=" mb-5">
      {label && <label htmlFor="">{label}</label>}

      <input
        {...props}
        varient="text"
        className="w-full mt-3  rounded-md bg-[#081338] px-4 py-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
