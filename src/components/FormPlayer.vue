<template>
  <div class="card">
    <div class="card-header">
      Jugador
    </div>
    <div class="card-body">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" v-model="player.name" />
      </div>
      <div class="form-group">
        <label for="position">Posición</label>
        <input type="text" class="form-control" v-model="player.position" />
      </div>
    </div>
    <div class="card-footer">
      <button
        type="button"
        class="btn btn-block btn-info"
        @click="save"
        :disabled="player.id > 0"
      >
        Grabar Datos
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormPlayer",
  props: {
    player: { type: Object, required: true },
  },
  methods: {
    save() {
      this.$emit("onSave", this.player);
    },
  },
};
</script>
<style scoped></style>
