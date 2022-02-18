import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import AboutContent from '../components/AboutContent'
import styles from '/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar about={true} home={false}/>
      <AboutContent/>
    </div>
  )
}

export default Home
