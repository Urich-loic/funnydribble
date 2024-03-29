"use client";

 
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from 'react';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Flex } from "@radix-ui/themes";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "../../../components/ui/navigation-menu";


  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]


//export default function NavbarLinks() {
   


    // const menuItems = [
    //     {
    //         name: 'Find designers',
    //         link: '/find-designers'
    //     },
    //     {
    //         name: 'Inspiration',
    //         link: '/inspiration'
    //     },
    //     {
    //         name: 'Courses',
    //         link: '/courses'
    //     },
    //     {
    //         name: 'Jobs',
    //         link: '/jobs'
    //     },
    //     {
    //         name: 'Go Pro',
    //         link: '/go-pro'
    //     }
    // ]



   


    // const pathname = usePathname()

    // return (
    //     <>
    //         <div className="w-5/12">
    //         <ul className="flex justify-start">
    //                 <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
    //                     <Flex>
    //                         {menuItems.map((menuItem) => {

    //                             return (
    //                                 <NavigationMenu.List key={menuItem.link}>
    //                                     <NavigationMenu.Item>
    //                                         <NavigationMenu.Trigger className=" shadow-blackA4 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none ">
    //                                             <Link href={menuItem.link}>{menuItem.name} {' '}</Link>
    //                                             <CaretDownIcon
    //                                                 className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
    //                                                 aria-hidden
    //                                             />
    //                                         </NavigationMenu.Trigger>
    //                                         <NavigationMenu.Content className="p-3 rounded-xl shadow-[0_0_0_2px] absolute top-[40px] left-0 w-full bg-white w-auto NavigationMenuContent">
    //                                             <ul className="m-0 grid list-none w-70 gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
    //                                                 <li title="Introduction"
    //                                                 className="p-2 rounded-xl hover:bg-gray-300">
    //                                                     <h5>Introduction</h5>
    //                                                     Build high-quality, accessible design systems and web apps.
    //                                                 </li>
    //                                                 <li className="p-2 rounded-xl hover:bg-gray-300" title="Getting started" >
    //                                                     <h5>Introduction</h5>
    //                                                     A quick tutorial to get you up and running with Radix Primitives.
    //                                                 </li>
    //                                                 <li className="p-2 rounded-xl hover:bg-gray-300" title="Styling" >
    //                                                     <h5>Introduction</h5>
    //                                                     Unstyled and compatible with any styling solution.
    //                                                 </li>
    //                                                 <li className="p-2 rounded-xl hover:bg-gray-300" title="Animation" >
    //                                                     <h5>Introduction</h5>
    //                                                     Use CSS keyframes or any animation library of your choice.
    //                                                 </li>
    //                                                 <li className="p-2 rounded-xl hover:bg-gray-300" title="Accessibility" >
    //                                                     <h5>Introduction</h5>
    //                                                     Tested in a range of browsers and assistive technologies.
    //                                                 </li>
    //                                                 <li className="p-2 rounded-xl hover:bg-gray-300" title="Releases" >
    //                                                     <h5>Introduction</h5>
    //                                                     Radix Primitives releases and their changelogs.
    //                                                 </li>
    //                                             </ul>
    //                                         </NavigationMenu.Content>
    //                                     </NavigationMenu.Item>
    //                                 </NavigationMenu.List>
    //                         )
    //                     })}
    //                 </Flex>
    //             </NavigationMenu.Root>
    //         </ul>




    //     </div >

    //     </>
    // )
//}

export function NavigationMenuDemo() {
return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className="l-3">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent className="l-3">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"