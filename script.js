{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww34000\viewh20820\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const menuToggle = document.querySelector('.menu-toggle');\
    const headerNav = document.querySelector('.header-nav');\
    const toggleIcon = menuToggle.querySelector('i');\
\
    // Mobile navigation bar \uc0\u4129 \u4118 \u4157 \u4100 \u4151 \u4154 \u4129 \u4117 \u4141 \u4112 \u4154  \u4124 \u4143 \u4117 \u4154 \u4102 \u4145 \u4140 \u4100 \u4154 \u4097 \u4155 \u4096 \u4154 \
    menuToggle.addEventListener('click', () => \{\
        headerNav.classList.toggle('open');\
        \
        // Menu \uc0\u4117 \u4157 \u4100 \u4151 \u4154 \u4116 \u4145 \u4097 \u4155 \u4141 \u4116 \u4154 \u4116 \u4158 \u4100 \u4151 \u4154  \u4117 \u4141 \u4112 \u4154 \u4113 \u4140 \u4152 \u4097 \u4155 \u4141 \u4116 \u4154  \u4129 \u4141 \u4143 \u4100 \u4154 \u4096 \u4157 \u4116 \u4154 \u4117 \u4156 \u4145 \u4140 \u4100 \u4154 \u4152 \u4124 \u4146 \u4097 \u4156 \u4100 \u4154 \u4152 \
        if (headerNav.classList.contains('open')) \{\
            toggleIcon.classList.remove('fa-bars');\
            toggleIcon.classList.add('fa-xmark');\
        \} else \{\
            toggleIcon.classList.remove('fa-xmark');\
            toggleIcon.classList.add('fa-bars');\
        \}\
    \});\
\
    // Menu \uc0\u4117 \u4157 \u4100 \u4151 \u4154 \u4116 \u4145 \u4101 \u4105 \u4154  Link \u4112 \u4101 \u4154 \u4097 \u4143 \u4097 \u4143 \u4096 \u4141 \u4143  \u4116 \u4158 \u4141 \u4117 \u4154 \u4124 \u4141 \u4143 \u4096 \u4154 \u4117 \u4139 \u4096  Menu Drawer \u4096 \u4141 \u4143  \u4129 \u4124 \u4141 \u4143 \u4129 \u4124 \u4155 \u4145 \u4140 \u4096 \u4154  \u4117 \u4156 \u4116 \u4154 \u4117 \u4141 \u4112 \u4154 \u4117 \u4145 \u4152 \u4097 \u4156 \u4100 \u4154 \u4152 \
    const navItems = document.querySelectorAll('.nav-item');\
    navItems.forEach(item => \{\
        item.addEventListener('click', () => \{\
            headerNav.classList.remove('open');\
            toggleIcon.classList.remove('fa-xmark');\
            toggleIcon.classList.add('fa-bars');\
        \});\
    \});\
\});}