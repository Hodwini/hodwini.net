// Утилиты для dashboard компонентов

// Функция для получения цвета редкости предметов
export const getRarityColor = (rarity: string) => {
  switch (rarity.toLowerCase()) {
    case 'common':
      return {
        bg: 'bg-gray-500',
        text: 'text-gray-600',
        border: 'border-gray-200'
      }
    case 'rare':
      return {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        border: 'border-blue-200'
      }
    case 'epic':
      return {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        border: 'border-purple-200'
      }
    case 'legendary':
      return {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        border: 'border-orange-200'
      }
    case 'mythic':
      return {
        bg: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-200'
      }
    default:
      return {
        bg: 'bg-gray-500',
        text: 'text-gray-600',
        border: 'border-gray-200'
      }
  }
}

// Функция для форматирования валюты
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}

// Функция для форматирования больших чисел
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

// Функция для расчета процента изменения
export const calculatePercentageChange = (current: number, previous: number): number => {
  if (previous === 0) return 0
  return ((current - previous) / previous) * 100
}

// Функция для получения цвета тренда
export const getTrendColor = (value: number): string => {
  if (value > 0) return 'text-green-600'
  if (value < 0) return 'text-red-600'
  return 'text-gray-600'
}

// Функция для получения иконки тренда
export const getTrendIcon = (value: number): '↗️' | '↘️' | '➡️' => {
  if (value > 0) return '↗️'
  if (value < 0) return '↘️'
  return '➡️'
}

// Типы для dashboard данных
export interface DashboardStats {
  balance: number
  totalSpent: number
  itemsOwned: number
  level: number
  experience: number
  experienceToNext: number
}

export interface AdminStats {
  totalUsers: number
  totalRevenue: number
  itemsSold: number
  activeUsers: number
}

export interface GameItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  rarity: string
  image?: string
  rating?: number
  popularity?: number
}

export interface Purchase {
  id: string
  itemId: string
  itemName: string
  itemImage?: string
  price: number
  purchaseDate: Date
  category: string
  rarity: string
}

export interface Transaction {
  id: string
  type: 'purchase' | 'deposit' | 'refund'
  amount: number
  description: string
  date: Date
  status: 'completed' | 'pending' | 'failed'
}

// Функция для генерации моковых данных (для разработки)
export const generateMockStats = (): DashboardStats => ({
  balance: Math.random() * 2000,
  totalSpent: Math.random() * 5000,
  itemsOwned: Math.floor(Math.random() * 100),
  level: Math.floor(Math.random() * 50) + 1,
  experience: Math.floor(Math.random() * 50000),
  experienceToNext: Math.floor(Math.random() * 5000)
})

export const generateMockAdminStats = (): AdminStats => ({
  totalUsers: Math.floor(Math.random() * 10000),
  totalRevenue: Math.random() * 100000,
  itemsSold: Math.floor(Math.random() * 5000),
  activeUsers: Math.floor(Math.random() * 1000)
})

// Константы для dashboard
export const DASHBOARD_CONSTANTS = {
  ITEMS_PER_PAGE: 12,
  RECENT_PURCHASES_LIMIT: 5,
  POPULAR_ITEMS_LIMIT: 3,
  ACTIVITY_FEED_LIMIT: 6,
  CHART_DAYS: 7,
  
  RARITIES: ['Common', 'Rare', 'Epic', 'Legendary', 'Mythic'],
  CATEGORIES: ['Weapon', 'Armor', 'Consumable', 'Accessory', 'Mount', 'Pet'],
  
  REFRESH_INTERVALS: {
    STATS: 30000,     // 30 секунд
    ACTIVITY: 10000,  // 10 секунд
    CHARTS: 60000     // 1 минута
  }
}