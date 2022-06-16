<template>
  <div class="container">
    <button class="colorat">
      <h1>{{ continut }}</h1>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleState: false,
    };
  },
  props: { continut: String, culoare: String },
  computed: {
    // style() {
    //   // console.log(this.culoare);
    //   return this.culoare;
    // },
  },
};
</script>

<style lang="scss" scoped>
button,
h1 {
  display: flex;
  flex: 1;
  flex-basis: 100%;
  flex-wrap: wrap;
  max-height: 32vh;
  max-width: 42vw;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
  padding: 3em;
  text-decoration: none;
}

h1 {
  font-size: 8vw;
  padding: 0;
  margin: 1em;
}
button.colorat {
  background-color: v-bind("culoare");
  margin: 1em;
}
</style>
