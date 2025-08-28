import { Star, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Моковые данные популярных предметов
const mockPopularItems = [
  {
    id: '1',
    name: 'Lightning Staff',
    image: '/placeholder-staff.jpg',
    price: 89.99,
    category: 'Weapon',
    rarity: 'Legendary',
    rating: 4.8,
    popularity: 95,
    description: 'Powerful magical staff with lightning enchantments'
  },
  {
    id: '2',
    name: 'Shadow Cloak',
    image: '/placeholder-cloak.jpg',
    price: 65.50,
    category: 'Armor',
    rarity: 'Epic',
    rating: 4.6,
    popularity: 87,
    description: 'Grants stealth abilities and shadow resistance'
  },
  {
    id: '3',
    name: 'Health Elixir Pack',
    image: '/placeholder-elixir.jpg',
    price: 19.99,
    category: 'Consumable',
    rarity: 'Rare',
    rating: 4.9,
    popularity: 92,
    description: 'Bundle of 20 powerful healing potions'
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

export function PopularItems() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Popular Items
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPopularItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              {/* Рейтинг позиции */}
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                {index + 1}
              </div>

              {/* Изображение предмета */}
              <Avatar className="h-16 w-16 rounded-lg">
                <AvatarImage 
                  src={item.image} 
                  alt={item.name}
                  className="object-cover"
                />
                <AvatarFallback className="rounded-lg">
                  {item.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              {/* Информация о предмете */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-lg font-bold text-green-600">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <Badge 
                      className={`text-xs text-white ${getRarityColor(item.rarity)}`}
                    >
                      {item.rarity}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 text-xs">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{item.rating}</span>
                    <span className="text-muted-foreground">
                      ({item.popularity}% popularity)
                    </span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка для просмотра всех предметов */}
        <div className="mt-4 pt-4 border-t">
          <Button variant="ghost" className="w-full">
            Browse All Items →
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}