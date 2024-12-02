import { DollarSign, Clock, TrendingDown } from 'lucide-react'

export function EarningsCard() {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Earning Reports</h2>
          <p className="text-slate-400">Weekly Earnings Overview</p>
        </div>
        <span className="text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded text-sm">
          +4.2%
        </span>
      </div>

      <div className="text-3xl font-bold text-white mb-6">$468</div>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-slate-900 rounded-lg">
          <div className="flex items-center gap-2 text-indigo-400 mb-2">
            <DollarSign className="w-5 h-5" />
            <span>Earnings</span>
          </div>
          <div className="text-xl font-semibold text-white">$545.69</div>
        </div>
        <div className="p-4 bg-slate-900 rounded-lg">
          <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <Clock className="w-5 h-5" />
            <span>Profit</span>
          </div>
          <div className="text-xl font-semibold text-white">$256.34</div>
        </div>
        <div className="p-4 bg-slate-900 rounded-lg">
          <div className="flex items-center gap-2 text-red-400 mb-2">
            <TrendingDown className="w-5 h-5" />
            <span>Expense</span>
          </div>
          <div className="text-xl font-semibold text-white">$74.19</div>
        </div>
      </div>
    </div>
  )
}

