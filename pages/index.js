import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed/>

        {/* Widgets */}
        <Widgets/>
      </main>
    </div>
  );
}
