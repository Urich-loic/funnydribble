"use client"
import '@radix-ui/themes/styles.css';
import { Avatar, Theme } from "@radix-ui/themes";

export default function AvatarComponent({avatarSrc, avataralt}:{
  avatarSrc:string,
  avataralt:string
}) {
  return (
    <Avatar
    size="1"
    src={avatarSrc}
    fallback="A"
    radius='full'
    alt={avataralt}
  />
        
  )
}