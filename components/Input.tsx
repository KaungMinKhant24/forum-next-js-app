type TInput = {
  placeholder?: string;
  label?: string;
};
function Input({ placeholder, label }: TInput) {
  return (
    <div className=" mb-5">
      {label && <label htmlFor="">{label}</label>}

      <input
        varient="text"
        className="w-full mt-3  rounded-md bg-[#081338] px-4 py-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
