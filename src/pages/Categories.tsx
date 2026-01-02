import { useState } from 'react';
import { Plus, Search, Edit2, Trash2, FolderTree } from 'lucide-react';

function Categories() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 1,
      name: 'پیتزا',
      description: 'انواع پیتزاهای ایتالیایی و آمریکایی',
      itemCount: 12,
      color: 'from-red-500 to-orange-500',
      status: 'فعال',
    },
    {
      id: 2,
      name: 'برگر',
      description: 'برگرهای متنوع با طعم‌های مختلف',
      itemCount: 8,
      color: 'from-yellow-500 to-orange-500',
      status: 'فعال',
    },
    {
      id: 3,
      name: 'پاستا',
      description: 'پاستاهای ایتالیایی اصیل',
      itemCount: 10,
      color: 'from-green-500 to-teal-500',
      status: 'فعال',
    },
    {
      id: 4,
      name: 'سالاد',
      description: 'سالادهای تازه و سالم',
      itemCount: 6,
      color: 'from-emerald-500 to-green-600',
      status: 'فعال',
    },
    {
      id: 5,
      name: 'گوشت',
      description: 'غذاهای گوشتی و استیک',
      itemCount: 7,
      color: 'from-rose-500 to-red-600',
      status: 'فعال',
    },
    {
      id: 6,
      name: 'ژاپنی',
      description: 'غذاهای ژاپنی و سوشی',
      itemCount: 9,
      color: 'from-cyan-500 to-blue-500',
      status: 'فعال',
    },
    {
      id: 7,
      name: 'دسر',
      description: 'انواع دسرها و شیرینی‌ها',
      itemCount: 15,
      color: 'from-pink-500 to-rose-500',
      status: 'غیرفعال',
    },
    {
      id: 8,
      name: 'نوشیدنی',
      description: 'نوشیدنی‌های گرم و سرد',
      itemCount: 20,
      color: 'from-blue-500 to-indigo-500',
      status: 'فعال',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-gray-800">لیست دسته‌بندی‌ها</h2>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all flex items-center gap-2 justify-center shadow-sm">
            <Plus size={20} />
            افزودن دسته‌بندی جدید
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="جستجوی دسته‌بندی..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">آیکون</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">نام دسته‌بندی</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">توضیحات</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">تعداد آیتم</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">وضعیت</th>
                <th className="text-right py-4 px-4 text-sm font-semibold text-gray-700">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                      <FolderTree size={24} className="text-white" />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-800">{category.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{category.description}</td>
                  <td className="py-4 px-4">
                    <span className="text-sm font-semibold text-gray-800">{category.itemCount} غذا</span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        category.status === 'فعال'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category.status}
                    </span>
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

        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                  <FolderTree size={24} className="text-white" />
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    category.status === 'فعال'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.status}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">{category.itemCount} غذا</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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

export default Categories;
