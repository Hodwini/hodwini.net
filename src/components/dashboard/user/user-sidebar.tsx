'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Settings, ShoppingBag } from 'lucide-react';

const userNavItems = [
  { href: '/dashboard', label: 'Главная', icon: Home },
  { href: '/dashboard/profile', label: 'Профиль', icon: User },
  { href: '/dashboard/orders', label: 'Заказы', icon: ShoppingBag },
  { href: '/dashboard/settings', label: 'Настройки', icon: Settings },
];

export function UserSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Мой кабинет</h2>
      </div>
      
      <nav className="px-4 py-6 space-y-2">
        {userNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}