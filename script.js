document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    const toggleIcon = menuToggle.querySelector('i');

    // Mobile navigation bar အဖွင့်အပိတ် လုပ်ဆောင်ချက်
    menuToggle.addEventListener('click', () => {
        headerNav.classList.toggle('open');
        
        // Menu ပွင့်နေချိန်နှင့် ပိတ်ထားချိန် အိုင်ကွန်ပြောင်းလဲခြင်း
        if (headerNav.classList.contains('open')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    // Menu ပွင့်နေစဉ် Link တစ်ခုခုကို နှိပ်လိုက်ပါက Menu Drawer ကို အလိုအလျောက် ပြန်ပိတ်ပေးခြင်း
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            headerNav.classList.remove('open');
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        });
    });
});
