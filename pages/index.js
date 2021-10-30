import Head from "next/head";
import Header from "../Components/Header";
import HomeScreen from "../Components/HomeScreen";
import { useSession } from "next-auth/react";
import Login from "../Components/Login";
export default function Home() {
  const { session } = useSession();

  // if (true) return <Login />;
  return (
    <div>
      <Head>
        <title>Google Docs : Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeScreen />
    </div>
  );
}
