import GingernetIcon from '../../assets/GingernetIcon.svg'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <header className="header">
        <img src={GingernetIcon} className="logo" alt="Gingernet.net Logo" />
        <h1>Gingernet.net</h1>
        <p className="tagline">The web for your <span className="souls">soul</span></p>
      </header>

      {/* <footer className="footer">
        <p>{new Date().getFullYear()} Gingernet.net - All rights reserved</p>
      </footer> */}
      
    </div>
  )
}
