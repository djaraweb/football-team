<template>
  <div>
    <h4><i class="fa fa-group" /> Team: {{ nameTeam }}</h4>
    <Alert :showAlert="showAlert" :type="typeAlert" :message="messageAlert" />
    <hr />
    <div class="row">
      <div class="col-md-4">
        <FormPlayer :player="valuesPlayer" @onSave="onClickSavePlayer" />
      </div>
      <div class="col-md-8">
        <SearchPlayer
          :refField="strField"
          :refValue="strValue"
          :optSelected="[
            { id: 'all', value: 'Todos' },
            { id: 'player', value: 'Jugador' },
            { id: 'position', value: 'Posición' },
          ]"
          @getDatos="onClickFilterPlayer"
        />
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="text-center">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col" class="text-center">Goals</th>
              <th scope="col" class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(player, index) in newArrayPlayers"
              :key="`player-${index}`"
            >
              <th
                class="text-center"
                width="80px"
                scope="row"
                v-text="player.id"
              />
              <td v-text="player.name" />
              <td v-text="player.position" />
              <td class="text-center" width="120px">
                <Goals :player="player" />
              </td>
              <td class="text-center" width="100px">
                <button
                  class="btn btn-info btn-sm"
                  @click="onClickEditPlayer(player.id)"
                >
                  <i class="fa fa-edit" />
                </button>
                &nbsp;
                <button
                  class="btn btn-danger btn-sm"
                  @click="onClickDestroy(index)"
                >
                  <i class="fa fa-trash" />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="text-center" colspan="4">
                <strong>Total Jugadores: {{ getCountPlayers }}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import SearchPlayer from "@/components/SearchPlayer";
import Goals from "@/components/Goals";
import FormPlayer from "@/components/FormPlayer";
import Alert from "@/components/Alert";
export default {
  name: "Team",
  components: {
    Goals,
    SearchPlayer,
    FormPlayer,
    Alert,
  },
  data() {
    return {
      strField: "all",
      strValue: "",
      newArrayPlayers: [],
      valuesPlayer: { id: 0, name: "", position: "", goals: 0 },
    };
  },
  props: {
    nameTeam: String,
    arrayPlayers: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      existError: (state) => state.existError,
      typeAlert: (state) => state.typeAlert,
      showAlert: (state) => state.showAlert,
      messageAlert: (state) => state.messageAlert,
    }),
    getCountPlayers() {
      return this.newArrayPlayers.length;
    },
  },
  methods: {
    ...mapMutations(["SET_SHOW_ALERT"]),
    ...mapActions(["savePlayer"]),
    onClickFilterPlayer(infield, invalue) {
      if (infield == "player" && invalue.trim().length > 0) {
        this.newArrayPlayers = this.arrayPlayers.filter((player) => {
          let newValue = invalue.toLowerCase();
          let namePlayer = player.name.toLowerCase();
          let matches = namePlayer.indexOf(newValue) >= 0 ? true : false;
          if (matches) {
            return player;
          }
        });
      } else if (infield == "position" && invalue.trim().length > 0) {
        this.newArrayPlayers = this.arrayPlayers.filter((player) => {
          let newValue = invalue.toLowerCase();
          let namePlayer = player.position.toLowerCase();
          let matches = namePlayer.indexOf(newValue) >= 0 ? true : false;
          if (matches) {
            return player;
          }
        });
      } else {
        this.newArrayPlayers = this.arrayPlayers;
      }
    },
    onClickDestroy(index) {
      if (index > -1) {
        let player = this.newArrayPlayers[index].name;
        this.SET_SHOW_ALERT(`Jugador: ${player}, Eliminado Correctamente`);
        this.newArrayPlayers.splice(index, 1);
        this.valuesPlayer = { id: 0, name: "", position: "", goals: 0 };
      }
    },
    onClickEditPlayer(ID) {
      let player = this.newArrayPlayers.filter((item) => item.id === ID);
      if (player.length == 1) {
        this.valuesPlayer = player[0];
      }
      //console.log(player.length);
    },
    onClickSavePlayer(player) {
      this.savePlayer(player);
      if (!this.existError) {
        this.SET_SHOW_ALERT(`Jugador: ${player.name}, Grabado Correctamente`);
        this.valuesPlayer = { id: 0, name: "", position: "", goals: 0 };
      }
    },
  },
  created() {
    this.onClickFilterPlayer(this.strField, this.strValue);
  },
};
</script>
<style scoped></style>
