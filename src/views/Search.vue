<template>
  <div class="wrapper">
    <Claim/>
    <div class="search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput">
      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
// eslint-disable-next-line
import Claim from "../components/Claim";

const API = "https://images-api.nasa.gov/search";

export default {
  name: "Search",
  components: { Claim },
  data() {
    // funkcja, która zwraca obiekt
    return {
      searchVaule: "",
      // musi zostać nadana inicjalna wartość, inaczej nie będzie ona reaktywna
      results: []
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      axios
        .get(`${API}?q=${this.searchValue}&media_type=image`)
        .then(response => {
          this.results = response.data.collection.items;
        })
        .catch(error => {
          console.log(error);
        });
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search {
  // display: none;
  flex-direction: column;
  width: 250px;
}

label {
  font-family: Montserrat, sans-serif;
}

input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid black;
}
</style>
