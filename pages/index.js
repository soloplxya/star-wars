import styles from '../styles/Home.module.css';
import IndexList from '../components/index/indexList';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main} 
            style={{
                div: "100vh", 
                backgroundColor: "#14213D"}}
      >
        <img 
            src="/images/starwars_logo.png"
            width="300px"
            height="200px" 
            alt="alternatetext">
        </img>
        <IndexList style={{ marginTop: "20px"}}/> 
      </main>
    </div>
  )
}
