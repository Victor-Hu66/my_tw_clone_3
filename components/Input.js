import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";


export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
        <img 
        src="https://render.fineartamerica.com/images/rendered/small/flat/round-beach-towel/images-medium-5/fatih-sultan-mehmed-ii-gentile-bellini.jpg?transparent=0&targetx=0&targety=-137&imagewidth=788&imageheight=1063&modelwidth=788&modelheight=788&backgroundcolor=2D181D&orientation=0&producttype=beachtowelround" 
        alt="user-img" 
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" 
                placeholder="What's happening?" rows="2"></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className="flex">
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-slate-100"/>
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-slate-100"/>
                </div>
                <button 
                className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
                    Tweet
                </button>
            </div>
        </div>
    </div>
  )
}
