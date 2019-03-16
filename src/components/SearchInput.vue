<template>
  <div class="searchWrapper">
    <input id="search" name="search" v-model="searchValue" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style lang="scss" scoped>

.searchWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 250px;
}

label {
  font-family: Montserrat, sans-serif;
}

input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid black;
  background: none;
}
</style>