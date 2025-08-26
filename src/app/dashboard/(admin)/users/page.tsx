import { Search, Filter, MoreVertical, UserPlus, Eye, Edit, Trash } from 'lucide-react';

// Пример данных пользователей
const users = [
  { id: 1, name: 'Иван Петров', email: 'ivan@example.com', role: 'user', status: 'active', joinDate: '2023-03-15' },
  { id: 2, name: 'Мария Сидорова', email: 'maria@example.com', role: 'user', status: 'active', joinDate: '2023-04-22' },
  { id: 3, name: 'Алексей Иванов', email: 'alex@example.com', role: 'admin', status: 'active', joinDate: '2023-01-10' },
  { id: 4, name: 'Елена Козлова', email: 'elena@example.com', role: 'user', status: 'inactive', joinDate: '2023-05-30' },
  { id: 5, name: 'Дмитрий Смирнов', email: 'dmitry@example.com', role: 'user', status: 'active', joinDate: '2023-06-12' },
];

export default function AdminUsersPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Управление пользователями</h1>
          <p className="text-gray-600 mt-2">Просмотр и управление всеми пользователями системы</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <UserPlus size={20} />
          Добавить пользователя
        </button>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Всего пользователей</h3>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
          <span className="text-xs text-green-600">↑ +12% за месяц</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Активных</h3>
          <p className="text-2xl font-bold text-gray-900">1,123</p>
          <span className="text-xs text-green-600">↑ +5% за месяц</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Новых за месяц</h3>
          <p className="text-2xl font-bold text-gray-900">142</p>
          <span className="text-xs text-green-600">↑ +8% за месяц</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500">Администраторов</h3>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <span className="text-xs text-gray-500">без изменений</span>
        </div>
      </div>

      {/* Фильтры и поиск */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Поиск по имени или email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Все роли</option>
              <option>Пользователи</option>
              <option>Администраторы</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Все статусы</option>
              <option>Активные</option>
              <option>Неактивные</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Таблица пользователей */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Пользователь
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Роль
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Статус
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дата регистрации
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    user.role === 'admin' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.role === 'admin' ? 'Админ' : 'Пользователь'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status === 'active' ? 'Активен' : 'Неактивен'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 hover:text-blue-700 p-1 rounded">
                      <Eye size={16} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-700 p-1 rounded">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-700 p-1 rounded">
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Пагинация */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          Показано 1-5 из 1,247 пользователей
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Предыдущая
          </button>
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            3
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Следующая
          </button>
        </div>
      </div>
    </div>
  );
}