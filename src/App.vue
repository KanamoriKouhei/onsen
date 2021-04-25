<template>
  <div id="app">
    <ul>
      <!-- リンク先の設定。'<a href="/">Index</a>' -->
      <li><router-link to="/">Index</router-link></li>
      <li><router-link to="/book-list">BookList</router-link></li>
    </ul>

    <!-- ここにURLと一致したコンポーネントが描画される -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>