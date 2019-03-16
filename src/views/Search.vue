<template>
  <div class="wrapper">
    <Claim/>
    <SearchInput/>

  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";
// eslint-disable-next-line
import Claim from "@/components/Claim";
import SearchInput from "@/components/SearchInput";

const API = "https://images-api.nasa.gov/search";

export default {
  name: "Search",
  components: { Claim, SearchInput },
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
  height: 100vh;
  justify-content: center;
  background-image: url('../assets/heroimage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0%;

}

</style>
