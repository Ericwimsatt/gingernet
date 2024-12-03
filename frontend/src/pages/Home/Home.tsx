import GingernetIcon from '../../assets/GingernetIcon.svg'
import { GameCarousel } from './GameCarousel'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      <header className="header">
        <img src={GingernetIcon} className="logo" alt="Gingernet.net Logo" />
        <div className="header-content">
            <h1 className="header-title">Gingernet.net</h1>
        </div>
      </header>

      <main className="main-content">
        <GameCarousel />
      </main>
    </div>
  )
}
