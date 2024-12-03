import { Link } from 'react-router-dom'
import GingernetIcon from '../../assets/GingernetIcon.svg'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header-content">
        <img src={GingernetIcon} className="logo" alt="Gingernet.net Logo" />
        <h2>Gingernet.net</h2>
      </Link>
    </header>
  )
}
