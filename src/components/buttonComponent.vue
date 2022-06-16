<template>
  <div>
    <button type="button" class="btn" :class="culoare">
      <h1 class="mx-3 my-3 px-3 py-3">{{ continut }}</h1>
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
  computed() {
    return {};
  },
};
</script>

<style scoped>
button,
h1 {
  display: inline-flex;
  min-width: 35vw;
  min-height: 30vh;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  align-content: center;
  align-items: center;
  align-self: center;
  font-size: 8vw;
  margin: 0;
  padding: 10px;
}
</style>
