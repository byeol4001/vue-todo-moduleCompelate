<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo"
      ><i class="fas fa-plus addBtn"></i
    ></span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        빈값
        <i
          class="fas fa-window-close closeModal"
          v-on:click="closeModalBtn"
        ></i>
      </h3>

      <h3 slot="body">경고</h3>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else if (this.newTodoItem === '') {
        this.closeModalBtn();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    closeModalBtn() {
      this.showModal = !this.showModal;
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  max-width: 400px;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  overflow: hidden;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #2ca3f8);
  display: block;
  width: 3rem;
  border-radius: middle;
}

.addBtn {
  color: #fff;
  vertical-align: middle;
}

.closeModal {
  color: #42b983;
}
</style>
