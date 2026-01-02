import { ChevronRight } from 'lucide-react';

function EditFood() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>مدیریت غذاها</span>
        <ChevronRight size={16} />
        <span className="font-semibold text-gray-800">ویرایش غذا</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">فرم ویرایش غذا</h2>

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
                defaultValue="پیتزا پپرونی"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="food-category" className="font-medium text-gray-700">
                دسته‌بندی
              </label>
              <select
                id="food-category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="پیتزا"
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
                defaultValue="۲۸۵,۰۰۰"
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
                defaultValue="۱۰"
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
            <div className="flex items-center gap-4">
                <img
                    src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="تصویر فعلی"
                    className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                        <div className="flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">برای تغییر تصویر کلیک کنید</span>
                        </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                    </div>
                </div>
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
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFood;
