import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { DotsHorizontalIcon, HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full ">

      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width={50}
          height={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-sm hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
      
      {/* Mini Profie */}
      <div className="hoverEffect  text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          className="rounded-full h-10 w-10 xl:mr-2"
          src="https://render.fineartamerica.com/images/rendered/small/flat/round-beach-towel/images-medium-5/fatih-sultan-mehmed-ii-gentile-bellini.jpg?transparent=0&targetx=0&targety=-137&imagewidth=788&imageheight=1063&modelwidth=788&modelheight=788&backgroundcolor=2D181D&orientation=0&producttype=beachtowelround"
          alt="user-img"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Fatih Sultan Mehmet</h4>
          <p className="text-gray-500">@FatihTheConqurer</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8" />
      </div>
    </div>
  );
}


