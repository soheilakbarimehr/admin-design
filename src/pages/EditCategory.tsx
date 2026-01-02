import { ChevronRight } from 'lucide-react';

function EditCategory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>مدیریت دسته‌بندی</span>
        <ChevronRight size={16} />
        <span className="font-semibold text-gray-800">ویرایش دسته‌بندی</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">فرم ویرایش دسته‌بندی</h2>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="category-name" className="font-medium text-gray-700">
              نام دسته‌بندی
            </label>
            <input
              type="text"
              id="category-name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="پیتزا"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category-description" className="font-medium text-gray-700">
              توضیحات
            </label>
            <textarea
              id="category-description"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="انواع پیتزاهای ایتالیایی و آمریکایی"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label htmlFor="category-color" className="font-medium text-gray-700">
              کلاس رنگ Tailwind
            </label>
            <input
              type="text"
              id="category-color"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="from-red-500 to-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-gray-700">وضعیت</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="status" value="active" className="form-radio text-blue-600" defaultChecked />
                <span className="text-gray-700">فعال</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="status" value="inactive" className="form-radio text-blue-600" />
                <span className="text-gray-700">غیرفعال</span>
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
              ذخیره تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCategory;
