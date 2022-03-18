import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/Clock";
import CountUp from "../components/CountUp";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animated Clock</title>
        <meta
          name="description"
          content="Simple animated clock with react that I build in my spare time"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>clock</div>
        <Clock />
        <div>count up</div>
        <CountUp />
      </main>
    </div>
  );
};

export default Home;
