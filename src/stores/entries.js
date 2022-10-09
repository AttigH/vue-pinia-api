import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
const apiBaseUrl = "https://api.publicapis.org";

// const fetchApi = (apiPath) => {
//   return fetch(`${apiBaseUrl}/${apiPath}`)
//     .then((response) => {
//       return response.json();
//     })
//     .catch((error) =>
//       console.error("Something went wrong. Can't fetch the data", error)
//     );
// };

export const useEntriesStore = defineStore({
  id: "entry",
  state: () => ({
    entries: [],
    randomEntries: [],
    categories: [],
    entriesDetails: [],
    loading: false,
    errorMsg: "",
    searchValue: "",
    selectedValue: "",
  }),

  actions: {
    getRandomEntries() {
      axios
        .get(`${apiBaseUrl}/random`)
        .then((response) => {
          this.randomEntries = response.data.entries;
        })
        .catch((error) => {
          console.log(error);
          this.errorMsg = "Error retrieving data";
        });
    },
    getEntriesDetails(id) {
      try {
        axios
          .get(`${apiBaseUrl}/entries?title=${encodeURIComponent(id)}`)
          .then((response) => {
            this.entriesDetails = response.data;
          });
      } catch (error) {
        console.log(error);
        this.errorMsg = "Error retrieving data";
      }
    },
    getCategories() {
      try {
        axios.get(`${apiBaseUrl}/categories`).then((response) => {
          this.categories = response.data.categories;
        });
      } catch (error) {
        console.log(error);
        this.errorMsg = "Error retrieving data";
      }
    },
    getAllEntries(qty = 200) {
      try {
        axios.get(`${apiBaseUrl}/entries`).then((response) => {
          this.entries = response.data.entries.slice(0, qty);
        });
      } catch (error) {
        console.log(error);
        this.errorMsg = "Error retrieving data";
      }
    },
  },
});
