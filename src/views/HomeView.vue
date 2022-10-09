<script setup></script>

<template>
  <div class="home__wrapper">
    <input
      v-model="searchValue"
      type="text"
      placeholder="search"
      class="search__bar"
    />

    <select v-model="selectedValue">
      <option v-for="(category, index) in categories">
        {{ category }}
      </option>
    </select>
    <h3>{{ title }}</h3>

    <div
      v-for="(entry, index) in filteredProducts"
      :key="index"
      class="container"
    >
      <RouterLink :to="`/${entry.API}`">
        {{ index + 1 }}. API Name: {{ entry.API }}
      </RouterLink>
      <p>API Category: {{ entry.Category }}</p>
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
const title = "Fetching All Entries";

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
</style>
