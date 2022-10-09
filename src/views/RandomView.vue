<template>
  <div class="Container">
    <h2>{{ title }}</h2>
    <div v-if="randomEntries != null" class="api__info">
      <div v-for="api in randomEntries" :key="api.API" class="api__container">
        <p>
          <span> API NAME : </span>
          <RouterLink :to="`/${api.API}`">
            {{ api.API }}
          </RouterLink>
        </p>

        <p>
          <span>
            <span> API DESC : </span>
          </span>
          {{ api.Description }}
        </p>
      </div>
    </div>
    <div class="random-btn">
      <button @click="getRandomEntries">Generate API</button>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useEntriesStore } from "../stores/entries";

const { randomEntries, loading, error } = storeToRefs(useEntriesStore());
const { getRandomEntries } = useEntriesStore();
const title = "Generated API";

// getEntries();
</script>

<style>
.Container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.Container h2 {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 auto;
}
.api__info {
  padding: 20px;
}
.api__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}
.random-btn button {
  width: 9rem;
  height: 3rem;
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  background-color: #afc3da;
}
.random-btn button:hover {
  background-color: #fff;
}
</style>
