<template>
  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text" @click="down">-</span>
    </div>
    <div class="form-control">{{ player.goals }}</div>
    <div class="input-group-prepend">
      <span class="input-group-text" @click="up">+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Goles",
  props: {
    player: Object,
    numberofgoals: Number,
    playerId: Number,
  },
  methods: {
    up() {
      this.player.goals += 1;
      //this.$emit("onUp", this.playerId);
    },
    down() {
      let goals = this.player.goals - 1;
      this.player.goals = goals < 0 ? 0 : goals;
      //this.$emit("onDown", this.playerId);
    },
  },
};
</script>
<style scoped>
span:hover {
  cursor: pointer;
  background-color: darkcyan;
  color: white;
}
</style>
