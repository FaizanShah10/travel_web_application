import { LuUserRound } from "react-icons/lu";

type ButtonProps = {
  type: 'button' | 'submit',
  title: string,
  icon?: string,
  variant: string;
  full?: boolean;
}

const Button = ({title, type, icon, variant, full}: ButtonProps) => {
  return (
    <button className="lg:px-6 px-4 py-2 bg-gray-700 text-white rounded-full font-semibold flex gap-2 
    items-center"
    type={type}
    >
        <LuUserRound className="w-5 h-5"/>
        <h2 className="lg:text-lg text-md">{title}</h2>
    </button>
  )
}

export default Button