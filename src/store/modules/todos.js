const state = {
  todos: []
};
const getters = {
  getAllTodos: state => state.todos
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id != id)),
  updateTodo: (state, update) => {
    const index = state.todos.findIndex(todo => todo.id == update.id);
    if (index != -1) {
      state.todos.splice(index, 1, update);
    }
  }
};
const actions = {
  async updateTodo({ commit }, update) {
    const response = await axios.put(
      `http://jsonplaceholder.typicode.com/todos/${update.id}`,
      update
    );
    // console.log(response);
    commit('updateTodo', response.data);
  },
  async filterTodos({ commit }, count) {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/todos?_limit=${count}`
    );
    // console.log(response);
    commit('setTodos', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
    // console.log(response);
    commit('removeTodo', id);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'http://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );
    // console.log(response);
    commit('newTodo', response.data);
  },
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos'
    );
    // console.log(response);
    commit('setTodos', response.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
