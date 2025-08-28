// Типы для dashboard системы

export interface User {
  id: string
  email: string
  username: string
  role: 'user' | 'admin' | 'moderator'
  balance: number
  level: number
  experience: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface GameItem {
  id: string
  name: string
  description: string
  price: number
  category: ItemCategory
  rarity: ItemRarity
  imageUrl?: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UserInventory {
  id: string
  userId: string
  itemId: string
  quantity: number
  purchaseDate: Date
  item: GameItem
}

export interface Purchase {
  id: string
  userId: string
  itemId: string
  quantity: number
  totalAmount: number
  status: PurchaseStatus
  purchaseDate: Date
  user: User
  item: GameItem
}

export interface Transaction {
  id: string
  userId: string
  type: TransactionType
  amount: number
  description: string
  status: TransactionStatus
  createdAt: Date
  user: User
}

// Enums
export type ItemCategory = 
  | 'weapon' 
  | 'armor' 
  | 'consumable' 
  | 'accessory' 
  | 'mount' 
  | 'pet'
  | 'cosmetic'

export type ItemRarity = 
  | 'common' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'mythic'

export type PurchaseStatus = 
  | 'pending' 
  | 'completed' 
  | 'failed' 
  | 'refunded'

export type TransactionType = 
  | 'purchase' 
  | 'deposit' 
  | 'refund' 
  | 'bonus'

export type TransactionStatus = 
  | 'pending' 
  | 'completed' 
  | 'failed'

// Dashboard Statistics Types
export interface DashboardUserStats {
  balance: number
  totalSpent: number
  itemsOwned: number
  level: number
  experience: number
  experienceToNext: number
  recentPurchases: Purchase[]
  popularItems: GameItem[]
}

export interface DashboardAdminStats {
  totalUsers: number
  activeUsers: number
  totalRevenue: number
  monthlyRevenue: number
  itemsSold: number
  averageOrderValue: number
  topSellingItems: GameItem[]
  recentTransactions: Transaction[]
}

// Chart Data Types
export interface SalesChartData {
  date: string
  sales: number
  revenue: number
  users: number
}

export interface CategorySalesData {
  category: ItemCategory
  sales: number
  revenue: number
  percentage: number
}

export interface PopularityData {
  itemId: string
  itemName: string
  purchaseCount: number
  revenue: number
  popularity: number
}

// Activity Feed Types
export type ActivityType = 
  | 'purchase' 
  | 'deposit' 
  | 'registration' 
  | 'post' 
  | 'level_up'
  | 'item_added'
  | 'refund'

export interface ActivityItem {
  id: string
  type: ActivityType
  title: string
  description: string
  timestamp: Date
  amount?: number
  userId?: string
  username?: string
  metadata?: Record<string, any>
}

// Filter and Search Types
export interface ItemFilters {
  category?: ItemCategory[]
  rarity?: ItemRarity[]
  priceMin?: number
  priceMax?: number
  search?: string
  sortBy?: 'name' | 'price' | 'created' | 'popularity'
  sortOrder?: 'asc' | 'desc'
}

export interface TransactionFilters {
  type?: TransactionType[]
  status?: TransactionStatus[]
  dateFrom?: Date
  dateTo?: Date
  amountMin?: number
  amountMax?: number
  userId?: string
}

// API Response Types
export interface DashboardResponse<T> {
  data: T
  success: boolean
  message?: string
  timestamp: Date
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
  success: boolean
  message?: string
}

// Form Types
export interface CreateItemForm {
  name: string
  description: string
  price: number
  category: ItemCategory
  rarity: ItemRarity
  imageFile?: File
}

export interface DepositForm {
  amount: number
  paymentMethod: 'card' | 'paypal' | 'crypto'
}

export interface UserSettingsForm {
  username: string
  email: string
  currentPassword?: string
  newPassword?: string
  notifications: {
    email: boolean
    push: boolean
    marketing: boolean
  }
}

// Utility Types
export interface Trend {
  value: number
  percentage: number
  direction: 'up' | 'down' | 'neutral'
}

export interface StatCard {
  title: string
  value: string | number
  description: string
  trend?: Trend
  icon?: string
}

export interface QuickAction {
  title: string
  description: string
  href: string
  icon: string
  color: string
}