import { Activity, ShoppingCart, DollarSign, Users, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'

// Типы активности
type ActivityType = 'purchase' | 'deposit' | 'registration' | 'post' | 'level_up'

interface ActivityItem {
  id: string
  type: ActivityType
  title: string
  description: string
  timestamp: Date
  amount?: number
  user?: string
}

// Моковые данные активности
const mockActivityData: ActivityItem[] = [
  {
    id: '1',
    type: 'purchase',
    title: 'New Purchase',
    description: 'Dragon Sword purchased',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 минут назад
    amount: 24.99,
    user: 'You'
  },
  {
    id: '2',
    type: 'deposit',
    title: 'Balance Added',
    description: 'Funds added to wallet',
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 минут назад
    amount: 100.00,
    user: 'You'
  },
  {
    id: '3',
    type: 'level_up',
    title: 'Level Up!',
    description: 'Reached level 23',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 часа назад
    user: 'You'
  },
  {
    id: '4',
    type: 'registration',
    title: 'New User Joined',
    description: 'PlayerX joined the game',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 часа назад
    user: 'PlayerX'
  },
  {
    id: '5',
    type: 'post',
    title: 'New Blog Post',
    description: 'Game Update v2.1 released',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 часов назад
    user: 'Admin'
  }
]

const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case 'purchase':
      return <ShoppingCart className="h-4 w-4" />
    case 'deposit':
      return <DollarSign className="h-4 w-4" />
    case 'registration':
      return <Users className="h-4 w-4" />
    case 'post':
      return <FileText className="h-4 w-4" />
    case 'level_up':
      return <Activity className="h-4 w-4" />
    default:
      return <Activity className="h-4 w-4" />
  }
}

const getActivityColor = (type: ActivityType) => {
  switch (type) {
    case 'purchase':
      return 'text-blue-600 bg-blue-100'
    case 'deposit':
      return 'text-green-600 bg-green-100'
    case 'registration':
      return 'text-purple-600 bg-purple-100'
    case 'post':
      return 'text-orange-600 bg-orange-100'
    case 'level_up':
      return 'text-yellow-600 bg-yellow-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

const getActivityBadgeVariant = (type: ActivityType) => {
  switch (type) {
    case 'purchase':
      return 'default'
    case 'deposit':
      return 'secondary'
    case 'level_up':
      return 'secondary'
    default:
      return 'outline'
  }
}

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivityData.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 pb-3 last:pb-0"
            >
              {/* Иконка активности */}
              <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>

              {/* Содержание активности */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    {activity.title}
                  </p>
                  {activity.amount && (
                    <Badge variant={getActivityBadgeVariant(activity.type)}>
                      ${activity.amount}
                    </Badge>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    by {activity.user}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка для просмотра всей активности */}
        <div className="mt-4 pt-4 border-t">
          <button className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all activity →
          </button>
        </div>
      </CardContent>
    </Card>
  )
}