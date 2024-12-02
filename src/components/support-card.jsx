import { Ticket, Clock } from 'lucide-react'

export function SupportCard() {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">Support Tracker</h2>
          <p className="text-slate-400">Last 7 Days</p>
        </div>
      </div>

      <div className="text-4xl font-bold text-white mb-6">164</div>
      <p className="text-slate-400 mb-6">Total Tickets</p>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Ticket className="w-8 h-8 text-indigo-400" />
          <div className="flex-1">
            <div className="flex justify-between text-white mb-1">
              <span>New Tickets</span>
              <span>142</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8 text-emerald-400" />
          <div className="flex-1">
            <div className="flex justify-between text-white mb-1">
              <span>Response Time</span>
              <span>1 Day</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

