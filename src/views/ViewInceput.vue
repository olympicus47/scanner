<template>
  <div class="container postion relative">
    <tr>
      <td>
        <router-link to="/"
          ><ButtonComponent continut="Inventar" culoare="btn-warning"
        /></router-link>
      </td>
      <td>
        <router-link to="/"
          ><ButtonComponent continut="Vinde" culoare="btn-success"
        /></router-link>
      </td>
    </tr>
  </div>
  <div class="container">
    <tr>
      <td>
        <router-link to="/"
          ><ButtonComponent continut="Trimite" culoare="btn-danger"
        /></router-link>
      </td>
      <td>
        <router-link to="/"
          ><ButtonComponent continut="Cauta" culoare="btn-info"
        /></router-link>
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
router-link,
a {
  text-decoration: none;
}
</style>
