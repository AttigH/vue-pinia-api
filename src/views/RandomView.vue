<template>
  <div class="random-api">
    <h2>{{ title }}</h2>
    <div v-if="randomEntries != null" class="random-api-view">
      <div v-for="api in randomEntries" :key="api.API">
        <h3>
          <RouterLink :to="`/${api.API}`">
            {{ api.API }}
          </RouterLink>
        </h3>
        <p>
          {{ api.Description }}
        </p>
      </div>
    </div>
    <div class="another-random-btn">
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
.random-api {
  flex: 1;
  min-height: calc(100vh - 200px);
}

.random-api h2 {
  color: #646464;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 30px;
}
.another-random-btn {
  margin-top: 70px;
}

.another-random-btn button {
  color: #505f72;
  background: #f3ede67e;
  border-radius: 6px;
  border: 1px solid #c9c8c7e7;
  box-shadow: 2px 2px 6px 4px #d8d7d6e7;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 15px;
}

/* iPhone version */
@media (max-width: 767px) {
  .random-api h2 {
    font-size: 22px;
  }
  .another-random-btn button {
    font-size: 14px;
  }
}
</style>
