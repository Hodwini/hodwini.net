'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { UserSidebar } from '@/components/dashboard/user/user-sidebar';
import { AdminSidebar } from '@/components/dashboard/admin/admin-sidebar';
import { DashboardHeader } from '@/components/dashboard/header';

interface DashboardLayoutProps {
  children: ReactNode;
}

// Админские страницы - определяем по URL
const adminPages = ['/dashboard/users', '/dashboard/products', '/dashboard/analytics'];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const isAdminPage = adminPages.some(page => pathname.startsWith(page));

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader isAdmin={isAdminPage} />
      <div className="flex">
        {/* Показываем разные сайдбары в зависимости от типа страницы */}
        {isAdminPage ? <AdminSidebar /> : <UserSidebar />}
        
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}