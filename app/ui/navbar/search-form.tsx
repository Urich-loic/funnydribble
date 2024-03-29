"use client"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { TextField } from '@radix-ui/themes'
import React from 'react'

export default function SearchForm() {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const param = new URLSearchParams(searchParams);
    const { replace } = useRouter()

    const handleChange = (term) => {

        if (term) {
            param.set('query', term);
        } else {
            param.delete('query');
        }

        replace(`${pathname}?${param.toString()}`);

    }

    return (
       <form action="">
         <TextField.Root onChange={term => handleChange(term.target.value)} radius='full' placeholder="Search the docs…">
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
       </form>

    )
}
