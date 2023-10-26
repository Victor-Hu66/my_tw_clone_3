import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid"
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline" 

 
export default function Sidebar() {
  return (
    <div>
      
      {/* Twitter Logo */}
      <div>
        <Image
        width={50}
        height={50} 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png">

        </Image>
      </div>
      {/* Menu */}
      <div>
        <SidebarMenuItem text="Home" Icon={HomeIcon}/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>
      {/* Button */}
      {/* Mini Profie */}
    </div>
  )
}
