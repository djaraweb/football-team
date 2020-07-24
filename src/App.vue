<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "AppBase",
  components: {
    Navbar,
  },
};
</script>
<style>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
