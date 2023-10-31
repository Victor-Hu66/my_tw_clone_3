import { SearchIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div>
        <div>
            <div>
                <SearchIcon className="h-5"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>
        </div>
    </div>
  )
}
