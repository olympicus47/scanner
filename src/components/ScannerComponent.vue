<template>
  <v-quagga
    :onDetected="logIt"
    :readerSize="readerSize"
    :readerTypes="['ean_reader']"
  ></v-quagga>
</template>
<script>
export default {
  name: "VueBarcodeTest",
  data() {
    return {
      readerSize: {
        width: 640,
        height: 480,
      },
      detecteds: [],
    };
  },
  methods: {
    logIt(data) {
      console.log("detected", data);
    },
  },
};
</script>
<style></style>
