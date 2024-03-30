import Image from 'next/image'
import { Photo } from './Photo'
import styles from './photocard.module.css'
import AvatarComponent from './avatar'
import { Badge, Box, Flex } from '@radix-ui/themes'
import { HeartFilledIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <Box width="310" height="280">
      <Image src={photo.href} width={400} height={280} alt={photo.alt} className='aspect-video rounded-xl' />
      <div className='flex px-3 justify-between py-3'>
        <span className='flex items-center gap-3'>
          <HoverCard>
            <HoverCardTrigger>
              <AvatarComponent avatarSrc={photo.avatar} avataralt={photo.alt} />
            </HoverCardTrigger>
            <HoverCardContent>
              <Flex gap={"4"}>
              <AvatarComponent avatarSrc={photo.avatar} avataralt={photo.alt} />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </Flex>
            </HoverCardContent>
          </HoverCard>
          {photo.name}
        </span>
        <Flex align={"center"} gap={"2"}>
          <Flex align={"center"} gap={'2'}>
            <Badge color="gray" variant="solid">38k</Badge>
            <HeartFilledIcon color='crimson' />
          </Flex>

          <Flex align={"center"} gap={'2'}>
            <Badge color="gray" variant="solid">
              {photo.numbersOfViews}
            </Badge>
            <EyeOpenIcon />
          </Flex>
        </Flex>
      </div>
    </Box>
  )
}
