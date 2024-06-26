import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        className="hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
        src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/archive/twitter_alerts_newcountriesandfeatures95.thumb.1280.1280.png"
        alt="twitter image inside a phone"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img 
            alt="twitter-logo"
            className="w-36 object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png" />
            <p className="text-center text-sm italic my-10">This app is created for learning purposes</p>
            <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
          </div>
        ))} 
      </div> 
    </div>
  ); 
}

export async function getServerSideProps() { 
   const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
