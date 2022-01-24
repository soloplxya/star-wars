import styles from '../styles/Home.module.css'
import IndexList from '../components/index/indexList'

export default function Home() {
  return (
    <div>
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
