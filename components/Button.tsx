import Link from "next/link"

const Button = ({link, value}:{link:string, value:string}) => {
  return (
    <button>
      <Link href={`/${link}`} className={`w-40 text-base text-center font-bold btn btn-primary text-nowrap text-white btn-primary text-white btn-primary-text`}>{value}</Link>
    </button>
  )
}

export default Button