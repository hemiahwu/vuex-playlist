<template>
  <div class="container">
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos";
export default {
  name: "app",
  components: { Todos }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
