import { Box } from "lucide-react"
import { FLogo } from "../logo"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Flex } from "@radix-ui/themes"
import { FooterAvatar } from "../homevavatar"

export default function FooterBar() {
    return (
        <div className="container border-t pt-5 flex justify-between"><span><FLogo /></span><span className="flex gap-4 items-center"><GitHubLogoIcon fontSize={20} scale={300} /></span><FooterAvatar /></div>
    )
}
