"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { SideBarOptions} from "@/services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
 
export function AppSidebar() {

    const path=usePathname()

  return (
    <Sidebar>
        <SidebarHeader className='flex item-centre mt-5'>
            <Image src='/logo.png' alt=logo width={200} height={100} 
            className="w-[150px]"
            />
            <Button className='w-full mt-5'><Plus /> Create a new interview</Button>
        </SidebarHeader> 
      <SidebarContent>
        <SidebarGroup>
            <SidebarContent>
                <SidebarMenu>
                    {SideBarOptions.map((option,index,=>)
                        (<SidebarMenuItem key={index} className='p-1'>
                        <SidebarMenuButton asChild className={'p-5 ${path==option.path&&'bg-blue-300'}'}>
                            <Link href={option.path}>
                            <option.icon  className={ ${path==option.path&& 'text-primary'}}/>
                            <span className={'text-[16px] font-medium ${path==option.path&& 'text-primary'}'}>{option.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>))}
                </SidebarMenu>    
            <SidebarContent/>
        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}