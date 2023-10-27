import Sidebar from "@/components/Sidebar";
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

        {/* Widgets */}
      </main>
    </div>
  );
}
