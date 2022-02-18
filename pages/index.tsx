import type { NextPage } from 'next'
import Navbar from './components/Navbar'
import styles from '../styles/Home.module.css'
import HomeContent from "./components/HomeContent"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <Navbar about={false} home={true}/>

      {/* Content */}
      <HomeContent/>
    </div>
  )
}

export default Home
