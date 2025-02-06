import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: string;
}

const Button = ({ type, title, icon, full, variant }: ButtonProps) => {
  return (
    <button
    className={`lg:px-6 px-4 py-3 ${variant} text-white rounded-full font-semibold flex gap-2 
    items-center justify-center ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="font-bold whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button