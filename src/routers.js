import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Info from '@/pages/Info.vue'
import Link from '@/pages/Link.vue'

// Регистрируем роутер как плагин

Vue.use(Router)

// экспорт нового плагина
export default new Router({
    // Для того чтобы были обычные слеши в путях
    mode: 'history',
    // Создаем массив где каждый объект будет представлять новую страницу
    routes: [
        {   // главная страница
            path: '/',
            component: Home
        },
        {
            path: '/info',
            component: Info
        },
        {
            path: '/link',
            component: Link
        }
    ]
})