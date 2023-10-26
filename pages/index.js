import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}

        {/* Widgets */}
      </main>
    </div>
  );
}
