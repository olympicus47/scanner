<template>
  <div class="container">
    <tr>
      <td>
        <button :class="{ active: toggleState1 }">
          <h1>Hello1</h1>
        </button>
      </td>
      <td>
        <button :class="{ active: toggleState2 }">
          <h1>Hello2</h1>
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <button :class="{ active: toggleState3 }">
          <h1>Hello3</h1>
        </button>
      </td>
      <td>
        <button :class="{ active: toggleState4 }">
          <h1>Hello4</h1>
        </button>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleState1: false,
      toggleState2: false,
      toggleState3: false,
      toggleState4: false,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  display: inline-flex;
  max-width: 20em;
  max-height: 20em;
}
.container {
  display: flex;
}
</style>
