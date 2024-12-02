import { useState, useEffect } from 'react'
import { LayoutDashboard, BarChart2, Users, ShoppingCart, Truck, GraduationCap, Mail, MessageSquare, Calendar, Trello, LayoutGrid, Menu, X } from 'lucide-react'

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Analytics')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const menuItems = [
    { name: 'Dashboards', icon: LayoutDashboard, badge: '5' },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'CRM', icon: Users },
    { name: 'eCommerce', icon: ShoppingCart },
    { name: 'Logistics', icon: Truck },
    { name: 'Academy', icon: GraduationCap },
    { name: 'Layouts', icon: LayoutGrid }
  ]

  const appPages = [
    { name: 'Email', icon: Mail },
    { name: 'Chat', icon: MessageSquare },
    { name: 'Calendar', icon: Calendar },
    { name: 'Kanban', icon: Trello }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-slate-800 rounded-md"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out md:block z-10`}>
        <div className="w-64 h-screen bg-slate-900 text-white p-4 flex flex-col overflow-y-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
            <span className="text-xl font-bold">Vuexy</span>
          </div>

          <nav className="space-y-6 flex-grow">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name)
                    if (window.innerWidth < 768) {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                    activeItem === item.name ? 'bg-indigo-500' : 'hover:bg-slate-800'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-white px-2 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-500 mb-2 px-3">
                APPS & PAGES
              </div>
              <div className="space-y-1">
                {appPages.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-slate-800"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
