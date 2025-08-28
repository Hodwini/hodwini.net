import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
  progress?: {
    current: number
    max: number
  }
  className?: string
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend = 'neutral',
  progress,
  className 
}: StatsCardProps) {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getTrendBadgeVariant = () => {
    switch (trend) {
      case 'up':
        return 'default'
      case 'down':
        return 'destructive'
      default:
        return 'secondary'
    }
  }

  return (
    <Card className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold">{value}</div>
          
          {progress ? (
            <div className="space-y-2">
              <Progress 
                value={(progress.current / progress.max) * 100} 
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">
                {description}
              </p>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              {getTrendIcon()}
              <Badge variant={getTrendBadgeVariant()} className="text-xs">
                {description}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}