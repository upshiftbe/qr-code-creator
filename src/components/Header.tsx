import { Link } from '@tanstack/react-router'
import { QrCode, Github } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <Link to="/" className="flex items-center gap-2.5 text-white">
        <QrCode className="h-6 w-6 text-cyan-400" />
        <span className="font-bold text-lg tracking-tight">QR Creator</span>
      </Link>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-200 transition"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </a>
    </header>
  )
}

export default Header
