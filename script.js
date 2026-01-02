document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const openSidebarBtn = document.getElementById('open-sidebar-btn');
  const closeSidebarBtn = document.getElementById('close-sidebar-btn');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const submenuToggles = document.querySelectorAll('.submenu-toggle');

  function openSidebar() {
    sidebar.classList.remove('translate-x-full');
    sidebarOverlay.classList.remove('hidden');
  }

  function closeSidebar() {
    sidebar.classList.add('translate-x-full');
    sidebarOverlay.classList.add('hidden');
  }

  if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', openSidebar);
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const submenuContent = toggle.nextElementSibling;
      const chevron = toggle.querySelector('[data-lucide="chevron-down"]');

      submenuContent.classList.toggle('hidden');
      chevron.classList.toggle('rotate-180');
    });
  });

  // Automatically open the correct submenu based on the current page
  const currentPage = window.location.pathname.split('/').pop();
  if (currentPage.startsWith('foods-')) {
    const foodSubmenu = document.querySelector('a[href="./foods-list.html"]').closest('.submenu-content');
    if (foodSubmenu) {
      foodSubmenu.classList.remove('hidden');
      foodSubmenu.previousElementSibling.querySelector('[data-lucide="chevron-down"]').classList.add('rotate-180');
    }
  } else if (currentPage.startsWith('categories-')) {
    const categorySubmenu = document.querySelector('a[href="./categories-list.html"]').closest('.submenu-content');
    if (categorySubmenu) {
      categorySubmenu.classList.remove('hidden');
      categorySubmenu.previousElementSibling.querySelector('[data-lucide="chevron-down"]').classList.add('rotate-180');
    }
  }

  // SweetAlert for delete buttons
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      Swal.fire({
        title: 'آیا از حذف این آیتم اطمینان دارید؟',
        text: "این عمل غیرقابل بازگشت است!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله، حذف کن!',
        cancelButtonText: 'انصراف'
      }).then((result) => {
        if (result.isConfirmed) {
          // Here you would typically handle the deletion.
          // For this demo, we'll just show a success message.
          Swal.fire(
            'حذف شد!',
            'آیتم مورد نظر با موفقیت حذف شد.',
            'success'
          );
        }
      });
    });
  });
});
