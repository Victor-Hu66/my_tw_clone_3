import { gerProviders } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div>
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/archive/twitter_alerts_newcountriesandfeatures95.thumb.1280.1280.png"
        alt="twitter image inside a phone"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div>
            <img src="https://render.fineartamerica.com/images/rendered/small/flat/round-beach-towel/images-medium-5/fatih-sultan-mehmed-ii-gentile-bellini.jpg?transparent=0&targetx=0&targety=-137&imagewidth=788&imageheight=1063&modelwidth=788&modelheight=788&backgroundcolor=2D181D&orientation=0&producttype=beachtowelround" />
            <p>This app is created for learning purposes</p>
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
