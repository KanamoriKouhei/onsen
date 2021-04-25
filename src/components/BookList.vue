<template>
  <div class="booklist">
    <h1>BookList</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <!-- リンク先の設定。 '<a href="/book/1/">book1</a>' -->
        <router-link :to="{ name: 'book', params: { id: book.id }}">{{ book.name }}</router-link>
      </li>
    </ul>

    <!-- /book/:id/* のURLに一致したコンポーネントが描画される -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data: function() {
    return {
      books: [
        {id: 1, name: 'book1'},
        {id: 2, name: 'book2'},
      ]
    }
  },
}
</script>