import { 
  ShoppingCart, 
  Wallet, 
  Package, 
  Settings, 
  Plus,
  Users,
  BarChart3,
  FileText
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface QuickActionsProps {
  userRole: 'user' | 'admin'
}

const userActions = [
  {
    title: 'Add Funds',
    description: 'Top up your balance',
    icon: Wallet,
    href: '/dashboard/balance',
    color: 'text-green-600 bg-green-50 hover:bg-green-100'
  },
  {
    title: 'Browse Shop',
    description: 'Find new items',
    icon: ShoppingCart,
    href: '/dashboard/shop',
    color: 'text-blue-600 bg-blue-50 hover:bg-blue-100'
  },
  {
    title: 'My Inventory',
    description: 'View owned items',
    icon: Package,
    href: '/dashboard/inventory',
    color: 'text-purple-600 bg-purple-50 hover:bg-purple-100'
  },
  {
    title: 'Settings',
    description: 'Account settings',
    icon: Settings,
    href: '/dashboard/settings',
    color: 'text-gray-600 bg-gray-50 hover:bg-gray-100'
  }
]

const adminActions = [
  {
    title: 'Add New Item',
    description: 'Create game item',
    icon: Plus,
    href: '/dashboard/game-items/new',
    color: 'text-green-600 bg-green-50 hover:bg-green-100'
  },
  {
    title: 'Manage Users',
    description: 'User administration',
    icon: Users,
    href: '/dashboard/users',
    color: 'text-blue-600 bg-blue-50 hover:bg-blue-100'
  },
  {
    title: 'View Analytics',
    description: 'Sales & performance',
    icon: BarChart3,
    href: '/dashboard/analytics',
    color: 'text-purple-600 bg-purple-50 hover:bg-purple-100'
  },
  {
    title: 'Create Post',
    description: 'Write blog post',
    icon: FileText,
    href: '/dashboard/posts/new',
    color: 'text-orange-600 bg-orange-50 hover:bg-orange-100'
  }
]

export function QuickActions({ userRole }: QuickActionsProps) {
  const actions = userRole === 'admin' ? adminActions : userActions

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {userRole === 'admin' ? 'Admin Actions' : 'Quick Actions'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {actions.map((action) => {
            const IconComponent = action.icon
            return (
              <Button
                key={action.title}
                variant="ghost"
                className="h-auto p-4 justify-start"
                asChild
              >
                <a href={action.href}>
                  <div className="flex items-center space-x-3 w-full">
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm">{action.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}