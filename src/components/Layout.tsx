import { ReactNode, useState } from 'react';
import { Menu, X, Home, UtensilsCrossed, FolderTree, ChevronDown } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(
    currentPage.startsWith('foods') ? 'foods' : null
  );

  const menuItems = [
    { id: 'dashboard', label: 'داشبورد', icon: Home },
    {
      id: 'foods',
      label: 'مدیریت غذاها',
      icon: UtensilsCrossed,
      submenu: [
        { id: 'foods-list', label: 'لیست غذاها' },
        { id: 'foods-add', label: 'افزودن غذا' },
        { id: 'foods-edit', label: 'ویرایش غذا' },
      ],
    },
    {
      id: 'categories',
      label: 'مدیریت دسته‌بندی',
      icon: FolderTree,
      submenu: [
        { id: 'categories-list', label: 'لیست دسته‌بندی‌ها' },
        { id: 'categories-add', label: 'افزودن دسته‌بندی' },
        { id: 'categories-edit', label: 'ویرایش دسته‌بندی' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">پنل مدیریت رستوران</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isSubMenuOpen = openSubMenu === item.id;

            if (item.submenu) {
              return (
                <div key={item.id} className="mb-2">
                  <button
                    onClick={() =>
                      setOpenSubMenu(isSubMenuOpen ? null : item.id)
                    }
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        isSubMenuOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isSubMenuOpen && (
                    <div className="pt-2 pr-4">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => {
                            onNavigate(subItem.id);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full text-right flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm ${
                            currentPage === subItem.id
                              ? 'bg-blue-500 text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
                  currentPage === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1 lg:mr-64">
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800">
              {menuItems.find((item) => item.id === currentPage)?.label}
            </h2>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              AD
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">{children}</main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Layout;
