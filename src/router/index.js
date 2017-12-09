import Vue from 'vue';
import Router from 'vue-router';
import index from 'components/index/index';
import find from 'components/find/find';
import order from 'components/order/order';
import me from 'components/me/me';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import sellerinfo from 'components/sellerinfo/sellerinfo';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/find',
    component: find
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/me',
    component: me
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/sellerinfo',
    component: sellerinfo
  }
];

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});
