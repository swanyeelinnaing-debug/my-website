/* --- Root Variables & Reset --- */
:root {
    --primary-color: #0071e3;    /* Apple style vibrant blue */
    --dark-color: #1d1d1f;       /* Premium dark gray */
    --light-bg: #f5f5f7;         /* Soft light background */
    --text-muted: #86868b;       /* Muted text color */
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--dark-color);
    background-color: #ffffff;
    line-height: 1.5;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

/* --- Header Styling --- */
.site-header {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px); /* Modern blur effect */
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
}

/* Left: Logo */
.header-logo .logo-text {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: var(--dark-color);
}

.header-logo .logo-text span {
    color: var(--primary-color);
    font-weight: 500;
}

/* Middle: Nav Links */
.nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.nav-item {
    font-size: 0.95rem;
    font-weight: 500;
    color: #515154;
    padding: 0.5rem 0;
}

.nav-item:hover, .nav-item.active {
    color: var(--primary-color);
}

/* Right: Contacts */
.header-contact {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 0.9rem;
}

.header-contact a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #515154;
}

.header-contact a:hover {
    color: var(--primary-color);
}

/* Icons styling */
.fa-telegram { color: #0088cc; font-size: 1.15rem; }
.fa-viber { color: #7360f2; font-size: 1.15rem; }

/* Menu Toggle Button */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--dark-color);
}

/* --- Hero Section Styling --- */
.hero-section {
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 90% 10%, #e8f2ff 0%, #ffffff 60%);
    padding: 2rem;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    animation: fadeIn 1s ease-out;
}

.badge {
    background-color: rgba(0, 113, 227, 0.1);
    color: var(--primary-color);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.5rem;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.15;
    margin-bottom: 1.5rem;
}

.hero-content p {
    font-size: 1.25rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 2.5rem auto;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    padding: 0.8rem 1.8rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 500;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #0062c3;
    box-shadow: 0 4px 15px rgba(0, 113, 227, 0.3);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: rgba(0, 113, 227, 0.05);
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- Responsive Layout (Mobile & Tablet) --- */
@media (max-width: 1024px) {
    .site-header {
        padding: 1rem 2rem;
    }
    
    .header-contact span {
        display: none; /* စာသားတွေကို ဖျောက်ပြီး Icon သာပြသမည် */
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
        order: 2;
    }

    .header-contact {
        order: 3;
        gap: 1rem;
    }

    .header-nav {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.98);
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        padding: 2rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    }

    .header-nav.open {
        display: block;
        animation: slideDown 0.3s ease-in-out;
    }

    .nav-links {
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-content p {
        font-size: 1.1rem;
    }
}

@keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}
