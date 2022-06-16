<template>
  <h1>Inventar Simplist</h1>
  <div class="container">
    <tr>
      <td>
        <router-link to="/"
          ><ButtonComponent :culoare="culoareInventar" continut="Inventar"
        /></router-link>
      </td>
      <td>
        <router-link to="/"><ButtonComponent continut="Vinde" /></router-link>
      </td>
    </tr>
  </div>
  <div class="container">
    <tr>
      <td>
        <router-link to="/"><ButtonComponent continut="Trimite" /></router-link>
      </td>
      <td>
        <router-link to="/"><ButtonComponent continut="Cauta" /></router-link>
      </td>
    </tr>
  </div>
</template>

<script>
import ButtonComponent from "@/components/buttonComponent.vue";

export default {
  name: "ViewInceput",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      culoareInventar: "#fff55",
    };
  },
};
</script>

<style lang="scss" scoped>
router-link,
a {
  text-decoration: none;
}
.container {
  display: flex;
  width: 100%;
  max-height: 30vh;
  flex: 1;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
  padding: 0;
  margin: 0;
}
</style>
