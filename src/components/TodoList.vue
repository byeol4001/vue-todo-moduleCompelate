<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(item, index) in this.storedTodoItems"
        v-bind:key="item.item"
        class="shadow"
      >
        <i
          class="fas fa-check checkBtn"
          v-bind:class="{ checkBtnComplated: item.complated }"
          v-on:click="toggleComplate({ item, index })"
        ></i>
        <span v-bind:class="{ textComplated: item.complated }">{{
          item.item
        }}</span>
        <span class="removeBtn" v-on:click="removeItem({ item, index })"
          ><i class="fas fa-trash"></i
        ></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeItem: 'deleteOneItem',
      toggleComplate: 'toggleOneItem',
    }),
  },
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align-last: left;
}
li {
  display: flex;
  max-width: 370px;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem auto;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}

.checkBtn {
  line-height: 50px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnComplated {
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.textComplated {
  text-decoration: line-through;
  color: #b3adad;
}

/*리스트 트랜지션*/

.list-enter-active,
.list-leave-active {
  transition: all 0.6s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
