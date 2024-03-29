import { Box, Flex } from "@radix-ui/themes"
import Logo from "./logo"
import Searchbar from "./searchbar"
import { NavigationMenuDemo } from "./navbar-link"

export default function Navbar() {
  return (
    <>
      <Flex align={'center'} justify={'between'} className="w-12/12 py-2 mx-auto">
        <Box className="flex flex-1 justify-start"><NavigationMenuDemo /></Box>
        <Box className="flex flex-1 justify-center items-center text-center"><Logo /></Box>
        <Box className="flex flex-1 justify-end"><Searchbar /></Box>
      </Flex>
    </>
  )
}