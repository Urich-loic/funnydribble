import Image from "next/image"
import Link from "next/link"

export const Logo = ()=>{


  return (
    <div className="flex justify-center"><Link href={'/'}><Image src={'/assets/logogray.png'} width={170} height={60} alt="funny logo" /></Link></div>
  )
}

export const FLogo = ()=>{


  return (
    <div className="flex justify-star items-center"><Link href={'/'}><Image src={'/assets/logogray.png'} width={90} height={30} alt="funny logo" /></Link></div>
  )
}
