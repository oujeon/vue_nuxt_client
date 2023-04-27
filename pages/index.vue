<template></template>
<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "Index",
  // 2. data
  data() {
    return {};
  },
  // 3. components
  components: {},
  // 4. Lifecycle
  beforeCreate() {},
  created() {
    var value = document.cookie.match("(^|;) ?" + "id" + "=([^;]*)(;|$)");

    if (!value) {
      this.$router.push("/login");
    } else if (value) {
      this.$router.push("/dashboard");
    } else {
      this.$router.push("/login");
    }
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 5. watch
  watch: {},
  // 6. computed
  computed: {},
  // 7. methods
  methods: {},
};
</script>
<style scoped></style>
