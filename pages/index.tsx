import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/Clock";
import CountUp from "../components/CountUp";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odometer</title>
        <meta name="description" content="odometer with react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Clock</h1>
        <Clock />

        <h1 style={{ marginTop: 30 }}>Count up</h1>
        <CountUp />
      </main>
    </div>
  );
};

export default Home;
