import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export function NavMenu(){
    return(
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior>  
                    {/* legacyBehavior passHref className={navigationMenuTriggerStyle()}*/}
                        <NavigationMenuLink>
                        About Me
                        </NavigationMenuLink>
                    </Link>
                    {/* <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent> */}
                </NavigationMenuItem>
                {/* <Separator orientation="vertical" decorative className="text-black"/> */}
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior>
                        <NavigationMenuLink>
                        Demos
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}