const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};
const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      complated: false,
      item: todoItem,
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  deleteOneItem(state, payload) {
    localStorage.removeItem(payload.item.item);
    state.todoItems.splice(payload.index, 1);
  },
  toggleOneItem(state, payload) {
    state.todoItems[payload.index].complated = !state.todoItems[payload.index]
      .complated;
    // 로컬 스토리지의 데이터를 갱신
    localStorage.removeItem(payload.item.item);
    localStorage.setItem(payload.item.item, JSON.stringify(payload.item));
  },
  clearAllItem(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
