import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";

export default function Widgets({newsResults, randomUsersResults}) {
  const [articleNum, setArticleNum] = useState(3)

  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5"> 
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Twitter"/>
            </div>
        </div>
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
          <h4 className="font-bold text-xl px-4">What's happening</h4>
        {newsResults.slice(0,articleNum).map((article, index) => (
            <News key={article.title} article={article}/>
        ))}
        <button onClick={() => setArticleNum(articleNum + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
        </div>

        <div className="text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
          <h4 className="font-bold text-xl px-4">Who to follow</h4>
          {randomUsersResults.map((randomUser) => (
            <div key={randomUser.login.username}>
                 <img
                  className="rounded-full"
                  width="40"
                  src={randomUser.picture.thumbnail} alt="" />
                  <div>
                    <h4>{randomUser.login.username}</h4>
                    <h5>{randomUser.name.first+" "+randomUser.name.last}</h5>
                  </div>
            </div>
          ))}
          <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show  more</button>
        </div>

    </div>
  )
}
