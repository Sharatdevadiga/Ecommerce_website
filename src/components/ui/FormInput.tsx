import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  error?: FieldError;
  validationRules: RegisterOptions;
}

function FormInput({
  label,
  placeholder,
  register,
  id,
  type,
  validationRules,
  error,
}: FormInputProps) {
  {
    return (
      <div className="mb-3">
        <label className="mb-1 block text-sm" htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id, validationRules)}
          className={`block w-full rounded-md border-2 p-2 outline-none hover:border-pink-300 ${
            error ? "border-red-400" : "border-gray-300"
          }`}
        />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }
}

export default FormInput;
