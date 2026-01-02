import { ChevronRight } from 'lucide-react';

function AddFood() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>مدیریت غذاها</span>
        <ChevronRight size={16} />
        <span className="font-semibold text-gray-800">افزودن غذای جدید</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">فرم افزودن غذا</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="food-name" className="font-medium text-gray-700">
                نام غذا
              </label>
              <input
                type="text"
                id="food-name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مثال: پیتزا پپرونی"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="food-category" className="font-medium text-gray-700">
                دسته‌بندی
              </label>
              <select
                id="food-category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>پیتزا</option>
                <option>برگر</option>
                <option>پاستا</option>
                <option>سالاد</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="food-price" className="font-medium text-gray-700">
                قیمت (تومان)
              </label>
              <input
                type="text"
                id="food-price"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مثال: ۲۵۰,۰۰۰"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="food-stock" className="font-medium text-gray-700">
                تعداد موجودی
              </label>
              <input
                type="number"
                id="food-stock"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="مثال: ۲۰"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">وضعیت موجودی</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="stock-status" value="available" className="form-radio text-blue-600" defaultChecked />
                <span className="text-gray-700">موجود</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="stock-status" value="unavailable" className="form-radio text-blue-600" />
                <span className="text-gray-700">ناموجود</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">تصویر غذا</label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">برای آپلود کلیک کنید</span> یا فایل را بکشید و رها
                    کنید
                  </p>
                  <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
            >
              لغو
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              افزودن غذا
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFood;
