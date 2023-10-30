import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

export default function Feed() {

  const post = [
    {
      id: "1",
      name: "Ahmet",
      username: "codewithahmet",
      userImg:"https://render.fineartamerica.com/images/rendered/small/flat/round-beach-towel/images-medium-5/fatih-sultan-mehmed-ii-gentile-bellini.jpg?transparent=0&targetx=0&targety=-137&imagewidth=788&imageheight=1063&modelwidth=788&modelheight=788&backgroundcolor=2D181D&orientation=0&producttype=beachtowelround",
      img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "nice view!",
      timestamp: "3 hours ago"
    },
    {
      id: "2",
      name: "Ahmet",
      username: "codewithahmet",
      userImg:"https://render.fineartamerica.com/images/rendered/small/flat/round-beach-towel/images-medium-5/fatih-sultan-mehmed-ii-gentile-bellini.jpg?transparent=0&targetx=0&targety=-137&imagewidth=788&imageheight=1063&modelwidth=788&modelheight=788&backgroundcolor=2D181D&orientation=0&producttype=beachtowelround",
      img: "https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Wow!",
      timestamp: "1 day ago"
    }  
  ]
  
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5 "/>
            </div>
        </div>
        <Input/>
    </div>
  )
}
