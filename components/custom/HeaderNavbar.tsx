import Link from "next/link";
import { Button } from "../ui/button";
import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

interface HeaderNavProps {

}


export default function HeaderNavbar(props: HeaderNavProps) {
    return <div className="w-full flex h-14 shadow-md fixed bg-primary-foreground">
        {/* left */}
        <div className="w-44 h-full flex items-center justify-between px-2">
            <div className="text-primary font-bold">Twitch</div>
            <div className="flex text-sm font-semibold hover:text-primary active:border-primary hover:border-b-2 h-full items-center " >
                <Link href={'/'}>
                    Browse
                </Link>
            </div>
            <Button size={"icon"} variant={"secondary"} className="p"> <DotsVerticalIcon /></Button>
        </div>
        {/* middle */}
        <div className="bg-red flex-1 items-center flex justify-center py-2.5">
            <Input type="text" className="max-w-80 h-full rounded-r-none focus:ring-primary" />
            <Button variant={"secondary"} className=" pl-1 rounded-l-none h-full"> <SearchIcon /></Button>
        </div>
        {/* right */}
        <div className="w-40 h-full flex gap-1 items-center">
            <Button variant={'secondary'} size={"sm"}>Log In</Button>
            <Button size={"sm"}>Sign Up</Button>
        </div>
    </div >
}