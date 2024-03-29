import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <div className="flex justify-center"><Link href={'/'}><Image src={'/gray.png'} width={170} height={90} alt="funny logo" /></Link></div>
  )
}
