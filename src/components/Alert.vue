<template>
  <div v-if="showAlert" class="alert " :class="showTypeAlert">
    <strong> {{ message }} </strong>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    type: String,
    message: String,
    showAlert: Boolean,
  },
  computed: {
    showTypeAlert() {
      return {
        "alert-danger": this.type == "danger",
        "alert-info": this.type == "info",
      };
    },
  },
};
</script>
