<template>
  <div class="card mt-3">
    <div class="card-header">
      <span>
        <i class="fa fa-tasks" />
        Football Team
      </span>
    </div>
    <div class="card-body">
      <Team nameTeam="Peruano" :arrayPlayers="players" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Team from "@/components/Team.vue";
export default {
  name: "Home",
  components: {
    Team,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      players: (state) => state.players,
    }),
  },
  methods: {
    ...mapActions(["loadPlayers"]),
  },
  created() {
    this.loadPlayers();
  },
};
</script>
<style scoped></style>
