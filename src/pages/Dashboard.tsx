import { TrendingUp, Users, UtensilsCrossed, ShoppingCart } from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      title: 'کل فروش امروز',
      value: '۲,۴۵۰,۰۰۰ تومان',
      change: '+۱۲.۵٪',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'تعداد سفارشات',
      value: '۱۴۸',
      change: '+۸.۲٪',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'مشتریان جدید',
      value: '۳۲',
      change: '+۱۵.۳٪',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'غذاهای فعال',
      value: '۸۵',
      change: '+۴',
      icon: UtensilsCrossed,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const recentOrders = [
    { id: 1, customer: 'علی احمدی', items: 'پیتزا پپرونی، نوشابه', amount: '۲۸۵,۰۰۰', status: 'در حال آماده‌سازی' },
    { id: 2, customer: 'سارا محمدی', items: 'برگر مخصوص، سیب‌زمینی', amount: '۱۹۵,۰۰۰', status: 'تحویل داده شده' },
    { id: 3, customer: 'محمد رضایی', items: 'پاستا کربونارا', amount: '۲۲۰,۰۰۰', status: 'در حال ارسال' },
    { id: 4, customer: 'نیلوفر کریمی', items: 'ساندویچ مرغ، سالاد سزار', amount: '۱۷۵,۰۰۰', status: 'در انتظار تایید' },
    { id: 5, customer: 'رضا نوری', items: 'استیک گوشت، سالاد', amount: '۴۲۰,۰۰۰', status: 'در حال آماده‌سازی' },
  ];

  const topFoods = [
    { name: 'پیتزا پپرونی', sales: '۱۲۴', revenue: '۳,۴۸۰,۰۰۰' },
    { name: 'برگر مخصوص', sales: '۹۸', revenue: '۱,۹۶۰,۰۰۰' },
    { name: 'پاستا کربونارا', sales: '۷۵', revenue: '۱,۶۵۰,۰۰۰' },
    { name: 'سالاد سزار', sales: '۶۲', revenue: '۱,۲۴۰,۰۰۰' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تحویل داده شده':
        return 'bg-green-100 text-green-700';
      case 'در حال آماده‌سازی':
        return 'bg-blue-100 text-blue-700';
      case 'در حال ارسال':
        return 'bg-purple-100 text-purple-700';
      case 'در انتظار تایید':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon size={28} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">آخرین سفارشات</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">مشتری</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">آیتم‌ها</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">مبلغ</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">وضعیت</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm font-medium text-gray-800">{order.customer}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{order.items}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-800">{order.amount} تومان</td>
                    <td className="py-4 px-4">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">پرفروش‌ترین غذاها</h3>
          <div className="space-y-4">
            {topFoods.map((food, index) => (
              <div key={index} className="flex items-center justify-between pb-4 border-b last:border-b-0">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">{food.name}</p>
                  <p className="text-sm text-gray-600">{food.sales} فروش</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">{food.revenue}</p>
                  <p className="text-xs text-gray-500">تومان</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
