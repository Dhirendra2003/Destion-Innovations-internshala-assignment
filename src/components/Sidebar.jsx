import { Home, Settings, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Sidebar({isOpen, toggleSidebar }) {
  return (
    <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}>
    <nav>
      <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={toggleSidebar}>
        <Home className="inline-block mr-2" size={20} />
        Dashboard
      </Link>
      <Link to="/dashboard/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={toggleSidebar}>
        <UserCircle className="inline-block mr-2" size={20} />
        Profile
      </Link>
      <Link to="/dashboard/setting" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white" onClick={toggleSidebar}>
        <Settings className="inline-block mr-2" size={20} />
        Settings
      </Link>
    </nav>
  </div>
  )
}
