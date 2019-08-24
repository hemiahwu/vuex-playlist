const state = {
  todos: []
};
const getters = {
  getAllTodos: state => state.todos
};
const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  }
};
const actions = {
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
