<template>
  <div class="form-group row">
    <div class="col-12 col-sm-12 col-md-8">
      <div class="input-group">
        <span class="input-group-prepend">
          <select class="form-control" v-model="ref_field">
            <option
              v-for="item in optSelected"
              :key="item.id"
              :value="item.id"
              >{{ item.value }}</option
            >
          </select>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Filtrar Datos"
          v-model="ref_value"
          @keyup.enter="getData"
        />
        <span class="input-group-append">
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="getData"
          >
            <i class="fa fa-search" />
            &nbsp; Buscar
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPlayer",
  data() {
    return {
      ref_field: this.refField,
      ref_value: this.refValue,
    };
  },
  props: {
    refField: { type: String, required: true },
    refValue: { type: String, required: true },
    optSelected: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getData() {
      this.$emit("getDatos", this.ref_field, this.ref_value);
    },
  },
};
</script>
