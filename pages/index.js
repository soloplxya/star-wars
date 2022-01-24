import Image from 'next/image'
import styles from '../styles/Home.module.css'
import IndexList from '../components/index/indexList'

export default function Home() {
  return (
    <div>
      <main className={styles.main} 
            style={{
                div: "100vh", 
                backgroundColor: "#000"}}
      >
        <Image 
            src="/images/starwars_logo.png"
            width="400px"
            height="300px" 
            priority="true"
        /> 
        <IndexList style={{ marginTop: "20px"}}/> 
      </main>
    </div>
  )
}
