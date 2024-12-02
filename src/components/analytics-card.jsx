export function AnalyticsCard() {
  return (
    <div className="bg-indigo-500 rounded-xl p-6 text-white">
      <h2 className="text-xl font-semibold mb-1">Website Analytics</h2>
      <p className="text-indigo-200 mb-6">Total 28.5% Conversion Rate</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-indigo-600/50 rounded-lg p-3">
          <div className="text-3xl font-bold">12h</div>
          <div className="text-indigo-200">Spend</div>
        </div>
        <div className="bg-indigo-600/50 rounded-lg p-3">
          <div className="text-3xl font-bold">18</div>
          <div className="text-indigo-200">Order Size</div>
        </div>
        <div className="bg-indigo-600/50 rounded-lg p-3">
          <div className="text-3xl font-bold">127</div>
          <div className="text-indigo-200">Order</div>
        </div>
        <div className="bg-indigo-600/50 rounded-lg p-3">
          <div className="text-3xl font-bold">2.3k</div>
          <div className="text-indigo-200">Items</div>
        </div>
      </div>
    </div>
  )
}

