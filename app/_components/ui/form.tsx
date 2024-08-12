import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react"

const Form = ({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form {...props} className="flex items-center gap-4">
      {children}
    </form>
  )
}

export const Field = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref) => {
  return (
    <input
      className="w-full bg-transparent text-indigo-800 outline-none placeholder:text-indigo-400"
      {...props}
      ref={ref}
    />
  )
})

export const Label = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className="flex w-full items-center gap-2 rounded-[0.25rem] bg-indigo-100 p-4 text-indigo-400"
    >
      {children}
    </label>
  )
}

export const Submit = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="flex items-center justify-center gap-2 rounded-[0.25rem] bg-indigo-600 px-8 py-4 text-indigo-50 transition-all duration-100 hover:animate-pulse"
    >
      {children}
    </button>
  )
}

Form.Label = Label
Form.Field = Field
Form.Submit = Submit

export { Form }
