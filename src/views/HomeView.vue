<template>
  <div class="home__wrapper">
    <div class="search__container">
      <input
        v-model="searchValue"
        type="text"
        placeholder="Search..."
        class="search__bar"
      />

      <select v-model="selectedValue" placeholder="Choose Category">
        <option v-for="(category, index) in categories">
          {{ category }}
        </option>
      </select>
    </div>
    <h1>{{ title }}</h1>

    <div v-if="filteredProducts != null" class="apis__wrap">
      <div v-for="(entry, index) in filteredProducts" :key="index">
        <h3>
          <RouterLink :to="`/${entry.API}`">
            {{ index + 1 }}. API Name: {{ entry.API }}
          </RouterLink>
        </h3>
        <p>API Category: {{ entry.Category }}</p>
      </div>
    </div>
  </div>
  <br />
</template>

<script setup>
import { computed, reactive } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useEntriesStore } from "../stores/entries";
const route = useRoute();
const {
  categories,
  loading,
  error,
  searchValue,
  selectedValue,
  getEntryByName,
} = storeToRefs(useEntriesStore());
const store = useEntriesStore();
const { entries, getAllEntries, getCategories } = useEntriesStore();
const title = "Fetching Entries";

const filteredProducts = computed(() => {
  if (store.searchValue.trim().length > 0) {
    return store.entries.filter((entry) =>
      entry.API.toLowerCase().includes(store.searchValue.toLowerCase())
    );
  }
  if (store.selectedValue.trim().length > 0) {
    return store.entries.filter((entry) =>
      entry.Category.toLowerCase().includes(store.selectedValue.toLowerCase())
    );
  }

  return store.entries;
});
getAllEntries();
getCategories();
// const state = reactive({ searchValue: "all" });
</script>

<style scoped>
@media (min-width: 1024px) {
  .home__wrapper {
    min-height: 72vh;
    display: flex;
    align-items: center;
  }
}
.apis__wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  padding: 10px;
  margin-bottom: 30px;
}

.apis__wrap div {
  width: 20%;
  margin: 10px;
  border: 1px solid #c9c8c7e7;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 2px 2px 6px 4px #d8d7d6e7;
  background-color: #eddcd450;
}

.apis__wrap h3 {
  color: #a9b8c9;
  font-weight: 500;
  font-size: 22px;
  word-wrap: break-word;
}
.search__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
}
.search__container input {
  width: 25%;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
}
.search__container input::placeholder {
  font-weight: 700;
  font-size: 1.4;
}
.search__container select {
  width: 25%;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
}
</style>
