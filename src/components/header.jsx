import { Search, Bell, Settings } from 'lucide-react'

export function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-4">
      <div className="flex-1 relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search (Ctrl+/)"
          className="w-full max-w-md pl-10 pr-4 py-2 bg-slate-800 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-800 rounded-lg">
          <Bell className="w-5 h-5 text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-800 rounded-lg">
          <Settings className="w-5 h-5 text-slate-400" />
        </button>
        <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
      </div>
    </header>
  )
}

