import { gerProviders } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        className="hidden object-cover md:w-44 md:h-80 rotate-6 md-inline-flex"
        src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/archive/twitter_alerts_newcountriesandfeatures95.thumb.1280.1280.png"
        alt="twitter image inside a phone"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img 
            className="w-36 object-cover"
            src="https://render.fineartamerica.com/images/rendered/small/flat/round-beach-towel/images-medium-5/fatih-sultan-mehmed-ii-gentile-bellini.jpg?transparent=0&targetx=0&targety=-137&imagewidth=788&imageheight=1063&modelwidth=788&modelheight=788&backgroundcolor=2D181D&orientation=0&producttype=beachtowelround" />
            <p className="text-center text-sm italic my-10">This app is created for learning purposes</p>
            <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await gerProviders();
  return {
    props: {
      providers,
    },
  };
}
