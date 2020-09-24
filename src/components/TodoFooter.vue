<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" v-on:click="clearAll"> Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations({
      clearAll: 'clearAllItem',
    }),
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 1rem auto 0;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
