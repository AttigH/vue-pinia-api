<template>
  <div class="Details_wrapper">
    <h2>{{ title }}</h2>
    <div class="flex">
      <h1>
        <span> API NAME : </span>
      </h1>
      {{ entriesDetails.entries[0].API }}
    </div>
    <div class="flex">
      <h1>
        <span> API CATEGORY : </span>
      </h1>
      {{ entriesDetails.entries[0].Category }}
    </div>
    <div class="flex">
      <h1>
        <span> API DESC : </span>
      </h1>
      {{ entriesDetails.entries[0].Description }}
    </div>
    <div class="flex">
      <h1>
        <span> API LINK : </span>
      </h1>
      {{ entriesDetails.entries[0].Link }}
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useEntriesStore } from "../stores/entries";
const route = useRoute();
const { entriesDetails, loading, error } = storeToRefs(useEntriesStore());

const { getEntriesDetails } = useEntriesStore();
const title = "Api Details";

const id = route.params.apiId;
getEntriesDetails(id, true);
console.log(entriesDetails.value.entries[0]);
</script>

<style>
.Details_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
}
.Details_wrapper h2 {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 auto;
}
.flex {
  display: flex;

  justify-content: center;
  align-items: center;
}
.flex h1 {
  margin-right: 28px;
}
</style>
