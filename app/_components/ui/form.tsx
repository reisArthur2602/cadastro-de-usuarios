import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from 'react';

const Form = ({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form {...props} className="flex items-center gap-4">
      {children}
    </form>
  );
};

export const Field = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref) => {
  return (
    <input
    className="bg-transparent w-full outline-none placeholder:text-indigo-400 text-indigo-800"
      {...props}
      ref={ref}
    />
  );
});

export const Label = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className="w-full bg-indigo-100 p-4 rounded-[0.25rem] text-indigo-400 flex items-center gap-2"
    >
      {children}
    </label>
  );
};

export const Submit = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="bg-indigo-600 py-4 px-8 rounded-[0.25rem] text-indigo-50 flex items-center justify-center gap-2 hover:animate-pulse duration-100 transition-all"
    >
      {children}
    </button>
  );
};

Form.Label = Label;
Form.Field = Field;
Form.Submit = Submit;

export { Form };
