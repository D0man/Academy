<template>
  <div>
    List of subscribers:
    <WithLoading :isLoading="isLoading">
      <ul>
        <li v-for="email in emails" :key="email.id">
          {{ email.data }}
        </li>
      </ul>
    </WithLoading>
  </div>
</template>

<script>
import axios from "axios";
import WithLoading from './WithLoading';

export default {
  name: "BackendApp",

  components: {
    WithLoading,
  },

  data () {
    return {
      emails: [],
      isLoading: false,
    };
  },

  mounted() {
    this.isLoading = true;
    axios
      .get(`${process.env.API_URL}/subscriptions`)
      .then(response => {
        this.emails = response.data.emails;
        this.isLoading = false;
      });
  }
};
</script>

