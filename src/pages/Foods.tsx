import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Eye, EyeOff } from 'lucide-react';

function Foods() {
  const [searchTerm, setSearchTerm] = useState('');

  const foods = [
    {
      id: 1,
      name: 'پیتزا پپرونی',
      category: 'پیتزا',
      price: '۲۸۵,۰۰۰',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'فعال',
      stock: 'موجود',
    },
    {
      id: 2,
      name: 'برگر مخصوص',
      category: 'برگر',
      price: '۱۹۵,۰۰۰',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'فعال',
      stock: 'موجود',
    },
    {
      id: 3,
      name: 'پاستا کربونارا',
      category: 'پاستا',
      price: '۲۲۰,۰۰۰',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'فعال',
      stock: 'موجود',
    },
    {
      id: 4,
      name: 'سالاد سزار',
      category: 'سالاد',
      price: '۱۲۵,۰۰۰',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'فعال',
      stock: 'موجود',
    },
    {
      id: 5,
      name: 'استیک گوشت',
      category: 'گوشت',
      price: '۴۲۰,۰۰۰',
      image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'غیرفعال',
      stock: 'ناموجود',
    },
    {
      id: 6,
      name: 'سوشی میکس',
      category: 'ژاپنی',
      price: '۳۸۰,۰۰۰',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=200',
      status: 'فعال',
      stock: 'موجود',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">لیست غذاها</h2>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all flex items-center gap-2 justify-center shadow-sm">
            <Plus size={20} />
            افزودن غذای جدید
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="جستجوی غذا..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">تصویر</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">نام غذا</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">دسته‌بندی</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">قیمت</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">موجودی</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">وضعیت</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food) => (
                <tr key={food.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-800">{food.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{food.category}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-800">{food.price} تومان</td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        food.stock === 'موجود'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {food.stock}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 ${
                        food.status === 'فعال'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {food.status === 'فعال' ? <Eye size={14} /> : <EyeOff size={14} />}
                      {food.status}
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {foods.map((food) => (
            <div key={food.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex gap-4 mb-3">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{food.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{food.category}</p>
                  <p className="text-sm font-bold text-gray-800">{food.price} تومان</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      food.stock === 'موجود'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {food.stock}
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      food.status === 'فعال'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {food.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foods;
