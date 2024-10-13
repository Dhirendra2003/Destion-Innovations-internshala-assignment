import { Menu } from "lucide-react"

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-white ">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

