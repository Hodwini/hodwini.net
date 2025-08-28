'use client'

import { TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  AreaChart,
  Area
} from 'recharts'

// Моковые данные продаж за последние 7 дней
const mockSalesData = [
  { date: '2025-01-20', sales: 1240, revenue: 12400 },
  { date: '2025-01-21', sales: 1890, revenue: 18900 },
  { date: '2025-01-22', sales: 2340, revenue: 23400 },
  { date: '2025-01-23', sales: 1680, revenue: 16800 },
  { date: '2025-01-24', sales: 2100, revenue: 21000 },
  { date: '2025-01-25', sales: 2560, revenue: 25600 },
  { date: '2025-01-26', sales: 2890, revenue: 28900 }
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium">{`Date: ${label}`}</p>
        <p className="text-sm text-blue-600">
          {`Sales: ${payload[0].value.toLocaleString()}`}
        </p>
        <p className="text-sm text-green-600">
          {`Revenue: $${payload[1]?.value.toLocaleString()}`}
        </p>
      </div>
    )
  }
  return null
}

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Sales Analytics
        </CardTitle>
        <CardDescription>
          Daily sales and revenue for the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockSalesData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return `${date.getMonth() + 1}/${date.getDate()}`
                }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                fill="url(#salesGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                fill="url(#revenueGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Статистика под графиком */}
        <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">
              {mockSalesData[mockSalesData.length - 1].sales.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Sales Today</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">
              ${mockSalesData[mockSalesData.length - 1].revenue.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Revenue Today</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}