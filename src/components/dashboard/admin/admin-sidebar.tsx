'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Users, Package, Shield, ArrowLeft } from 'lucide-react';

const adminNavItems = [
  { href: '/dashboard/users', label: 'Пользователи', icon: Users },
  { href: '/dashboard/products', label: 'Продукты', icon: Package },
  { href: '/dashboard/analytics', label: 'Аналитика', icon: BarChart3 },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-red-400" size={24} />
          <h2 className="text-lg font-semibold">Админ панель</h2>
        </div>
        
        {/* Кнопка возврата к пользовательскому dashboard */}
        <Link 
          href="/dashboard"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          В пользовательский режим
        </Link>
      </div>
      
      <nav className="px-4 py-6 space-y-2">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-red-600 text-white font-medium' 
                  : 'text-gray-300 hover:bg-gray-700'
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