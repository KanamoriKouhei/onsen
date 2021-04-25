import Vue from 'vue'
// Vue Routerのインポート
import VueRouter from 'vue-router'
import App from './App.vue'
// コンポーネントのインポート
import Index from './components/Index.vue'
import BookList from './components/BookList.vue'

Vue.config.productionTip = false

// プラグインとして登録
Vue.use(VueRouter)

// ルートの定義
const router = new VueRouter({
  routes: [
    // http://xxxxxxxx/ のURLのときはIndexのコンポーネントを使う
    { path: '/', component: Index },
    { path: '/book-list', component: BookList },

    // http://xxxxxxxx/book/123 のURLのときはBookのコンポーネントを使う
    // {
    //   path: '/book/:id',
    //   name: 'book',
    //   component: Book,
    //   // :idにあたる123は数値型にキャストしてコンポーネントに渡す
    //   props: route => ({
    //     id: Number(route.params.id)
    //   }),
    //   // http://xxxxxxxx/book/123/* のURLの定義
    //   children: [
    //     {
    //       path: 'review/:review_id',
    //       name: 'book-review',
    //       component: BookReview,
    //       props: route => ({
    //         review_id: Number(route.params.review_id)
    //       })
    //     }
    //   ]
    // },
  ]
})

new Vue({
  router,  // ルーターの登録
  render: h => h(App),
}).$mount('#app')