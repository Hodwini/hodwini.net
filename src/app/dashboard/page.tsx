import { Suspense } from 'react'
import { Wallet, ShoppingCart, Package, TrendingUp, Users, DollarSign } from 'lucide-react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { RecentPurchases } from '@/components/dashboard/recent-purchases'
import { SalesChart } from '@/components/dashboard/sales-chart'
import { PopularItems } from '@/components/dashboard/popular-items'
import { QuickActions } from '@/components/dashboard/quick-actions'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { StatsCardSkeleton } from '@/components/dashboard/stats-card-skeleton'

// Типы пользователей
type UserRole = 'user' | 'admin'

// Моковые данные для разработки (потом заменим на реальные API вызовы)
const mockUserStats = {
  balance: 1250.50,
  totalSpent: 3420.75,
  itemsOwned: 47,
  level: 23,
  experience: 15420,
  experienceToNext: 2580
}

const mockAdminStats = {
  totalUsers: 2847,
  totalRevenue: 84521.30,
  itemsSold: 1432,
  activeUsers: 342
}

// Функция для получения роли пользователя (пока моковая)
async function getUserRole(): Promise<UserRole> {
  // В реальном проекте здесь будет получение роли из сессии/JWT токена
  // Для демонстрации можно переключать между 'user' и 'admin'
  return 'admin' // Измените на 'admin' чтобы посмотреть админский интерфейс
}

export default async function DashboardPage() {
  const userRole = await getUserRole()
  const isAdmin = userRole === 'admin'

  return (
    <div className="space-y-6">
      {/* Заголовок страницы */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {isAdmin ? 'Admin Dashboard' : 'Dashboard'}
        </h1>
        <p className="text-muted-foreground">
          {isAdmin 
            ? 'Manage your game store and monitor performance'
            : 'Welcome back! Here\'s your gaming overview'
          }
        </p>
      </div>

      {/* Статистические карточки */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<StatsCardSkeleton />}>
          {isAdmin ? (
            <>
              <StatsCard
                title="Total Users"
                value={mockAdminStats.totalUsers.toLocaleString()}
                description="+12% from last month"
                icon={Users}
                trend="up"
              />
              <StatsCard
                title="Revenue"
                value={`$${mockAdminStats.totalRevenue.toLocaleString()}`}
                description="+8% from last month"
                icon={DollarSign}
                trend="up"
              />
              <StatsCard
                title="Items Sold"
                value={mockAdminStats.itemsSold.toLocaleString()}
                description="+23% from last month"
                icon={ShoppingCart}
                trend="up"
              />
              <StatsCard
                title="Active Users"
                value={mockAdminStats.activeUsers.toLocaleString()}
                description="Currently online"
                icon={TrendingUp}
              />
            </>
          ) : (
            <>
              <StatsCard
                title="Balance"
                value={`$${mockUserStats.balance.toFixed(2)}`}
                description="Available for spending"
                icon={Wallet}
                trend="neutral"
              />
              <StatsCard
                title="Total Spent"
                value={`$${mockUserStats.totalSpent.toFixed(2)}`}
                description="Lifetime purchases"
                icon={ShoppingCart}
                trend="up"
              />
              <StatsCard
                title="Items Owned"
                value={mockUserStats.itemsOwned.toString()}
                description="In your inventory"
                icon={Package}
              />
              <StatsCard
                title="Level"
                value={mockUserStats.level.toString()}
                description={`${mockUserStats.experience.toLocaleString()} XP`}
                icon={TrendingUp}
                progress={{
                  current: mockUserStats.experience - (mockUserStats.level * 1000),
                  max: mockUserStats.experienceToNext
                }}
              />
            </>
          )}
        </Suspense>
      </div>

      {/* Основной контент в сетке */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Левая колонка - графики и основная информация */}
        <div className="lg:col-span-4 space-y-6">
          {isAdmin ? (
            <SalesChart />
          ) : (
            <div className="space-y-6">
              <RecentPurchases />
              <PopularItems />
            </div>
          )}
        </div>

        {/* Правая колонка - боковая информация */}
        <div className="lg:col-span-3 space-y-6">
          <QuickActions userRole={userRole} />
          <ActivityFeed />
        </div>
      </div>
    </div>
  )
}