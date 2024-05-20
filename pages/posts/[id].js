import CommentModal from "@/components/CommentModal";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import Post from "@/components/Post";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState  } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

export default function PostPage({ newsResults, randomUsersResults }) {
    const router = useRouter()
    const {id} = router.query
    const [post, setPost] = useState()

    useEffect(() => onSnapshot(doc(db , "posts", id ), (snapshot) => setPost(snapshot)), [db, id] )

  return (
    <div>
      <Head>
        <title>Post Page </title>
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="hoverEffect ">
                <ArrowLeftIcon className="h-5" onClick={() => router.push("/")}/>
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
              Tweet 
            </h2>
          </div>
          <Post  id={id} post={post}/>
        </div>

        {/* Widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />

        {/* Modal */}
        <CommentModal />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  // who to follow section
  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=50&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}