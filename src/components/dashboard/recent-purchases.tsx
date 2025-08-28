import { ShoppingBag, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatDistanceToNow } from 'date-fns'

// Моковые данные для последних покупок
const mockRecentPurchases = [
  {
    id: '1',
    itemName: 'Dragon Sword',
    itemImage: '/placeholder-sword.jpg',
    price: 24.99,
    purchaseDate: new Date(Date.now() - 1000 * 60 * 30), // 30 минут назад
    category: 'Weapon',
    rarity: 'Legendary'
  },
  {
    id: '2',
    itemName: 'Phoenix Armor',
    itemImage: '/placeholder-armor.jpg',
    price: 49.99,
    purchaseDate: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 часа назад
    category: 'Armor',
    rarity: 'Epic'
  },
  {
    id: '3',
    itemName: 'Magic Potion x10',
    itemImage: '/placeholder-potion.jpg',
    price: 12.50,
    purchaseDate: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 день назад
    category: 'Consumable',
    rarity: 'Common'
  },
  {
    id: '4',
    itemName: 'Enchanted Ring',
    itemImage: '/placeholder-ring.jpg',
    price: 35.00,
    purchaseDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 дня назад
    category: 'Accessory',
    rarity: 'Rare'
  }
]

const getRarityColor = (rarity: string) => {
  switch (rarity.toLowerCase()) {
    case 'common':
      return 'bg-gray-500'
    case 'rare':
      return 'bg-blue-500'
    case 'epic':
      return 'bg-purple-500'
    case 'legendary':
      return 'bg-orange-500'
    default:
      return 'bg-gray-500'
  }
}

export function RecentPurchases() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Recent Purchases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRecentPurchases.map((purchase) => (
            <div
              key={purchase.id}
              className="flex items-center space-x-4 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              {/* Изображение предмета */}
              <Avatar className="h-12 w-12">
                <AvatarImage 
                  src={purchase.itemImage} 
                  alt={purchase.itemName}
                />
                <AvatarFallback>
                  {purchase.itemName.charAt(0)}
                </AvatarFallback>
              </Avatar>

              {/* Информация о предмете */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">
                    {purchase.itemName}
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    ${purchase.price}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {purchase.category}
                  </Badge>
                  <Badge 
                    className={`text-xs text-white ${getRarityColor(purchase.rarity)}`}
                  >
                    {purchase.rarity}
                  </Badge>
                </div>

                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDistanceToNow(purchase.purchaseDate, { addSuffix: true })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка для просмотра всех покупок */}
        <div className="mt-4 pt-4 border-t">
          <button className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all purchases →
          </button>
        </div>
      </CardContent>
    </Card>
  )
}