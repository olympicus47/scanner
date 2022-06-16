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
        width: 300,
        height: 300,
      },
      detecteds: [],
    };
  },
  methods: {
    logIt(data) {
      let timestamp = Date.now();
      let read = {};
      read[timestamp] = data;
      this.detecteds.append(read);
      read, (timestamp = [{}, {}]);
    },
  },
  props: {
    instanta: String,
  },
};
</script>
<style></style>
