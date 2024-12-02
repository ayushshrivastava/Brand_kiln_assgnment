
import { Sidebar } from './../components/sidebar';
import { Header } from './../components/header';
import { AnalyticsCard } from './../components/analytics-card';
import { EarningsCard } from './../components/earnings-card';
import { SupportCard } from './../components/support-card';
export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 mt-16 md:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnalyticsCard />
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Average Daily Sales</h2>
                  <span className="text-emerald-500">+18.2%</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">$42.5k</div>
                <p className="text-slate-400">Total Sales This Month</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <EarningsCard />
            <SupportCard />
          </div>
        </main>
      </div>
    </div>
  )
}

