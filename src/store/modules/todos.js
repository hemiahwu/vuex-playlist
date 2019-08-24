const state = {
  todos: []
};
const getters = {
  getAllTodos: state => state.todos
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo)
};
const actions = {
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
