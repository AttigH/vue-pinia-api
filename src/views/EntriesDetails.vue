<template>
  <h2>{{ title }}</h2>
  <h2>
    {{ entriesDetails.entries[0].API }}
  </h2>
  <h2>
    {{ entriesDetails.entries[0].Category }}
  </h2>
  <p>
    {{ entriesDetails.entries[0].Description }}
  </p>
  <p>
    {{ entriesDetails.entries[0].Link }}
  </p>
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
#api-details {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
}

.apis-specific {
  display: flex;
  flex-direction: column;
}

.apis-specific h2 {
  color: #646464;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0 0 0;
}

.see-more h3 {
  color: #a9b8c9;
  font-size: 24px;
  margin-top: 120px;
  margin-bottom: 10px;
}

.similar-api-view {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.similar-api-view div {
  width: 20%;
  border: 1px solid #e4dcd2c2;
  padding: 5px 15px;
  font-weight: bold;
  box-shadow: 2px 2px 6px 4px #e4dcd2c2;
  margin: 10px 0;
  background-color: #f3ede67e;
}

.similar-api-view a {
  font-weight: 500;
  word-break: break-all;
}

/* iPad version */
@media (min-width: 768px) and (max-width: 1024px) {
  .similar-api-view {
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin-bottom: 30px;
  }

  .similar-api-view div {
    width: 30%;
    padding: 10px 5px;
  }

  .apis-specific h2 {
    margin-bottom: 0;
  }

  .see-more h3 {
    margin-top: 80px;
  }

  .similar-api-view a {
    word-break: break-all;
  }
}

/* iPhone version */
@media (max-width: 767px) {
  .apis-specific h2 {
    font-size: 22px;
  }
  .similar-api-view {
    flex-direction: column;
    align-items: center;
  }

  .similar-api-view div {
    width: 40%;
  }

  .similar-api-view a {
    word-break: break-all;
    padding: 5px;
  }

  .see-more h3 {
    margin-top: 50px;
  }
}
</style>
