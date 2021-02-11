
export const state = () => ({
  list: [],
  visibility: "all",
  editedTodo: null
});

  const filters = {
    all(list) {
      return list;
    },
    active(list) {
      return list.filter(todo => !todo.done);
    },
    completed(list) {
      return list.filter(todo => todo.done);
    }
  };

  export const getters = {
    filteredTodos: state => filters[state.visibility](state.list),
    remaining: state => {
      const todos = state.list.filter(todo => !todo.done);
      return todos.length;
    },
    filters: state => filters,
  };
  
  export const mutations = {
    add(state, text) {
      state.list.push({
        text,
        done: false,
        id: Date.now(),
        edit: false,
      });
    },
    remove(state, todo) {
      state.list = state.list.filter(t => t.id !== todo.id);
    },
    
    toggle(state, todo) {
      todo.done = !todo.done;
    },

    todoEdit(state, todo) {
      todo.edit = true;
      state.editedTodo = todo.id;
    },

    clearDone(state) {
      state.list = state.list.filter(t => !t.done);
    },

    changeFilter(state, filter) {
      state.visibility = filter;
    },

    allDone(state) {
      const listCompleted = state.list.filter(t => t.done).length

      if (state.list.length === listCompleted) {
        state.list.map(t => {
          if (t.done === true) {
            t.done = !t.done;
          }})
      } else {
        state.list.map(t => {
					if (t.done === false) {
						t.done = !t.done;
					}})
      }
    },

    doneEdit(state, todoText) {
      state.list.map(t => {
				if (t.id === state.editedTodo) {
					t.text = todoText;
          t.edit = false;
				}
			})
      state.editedTodo = null
    },
    
    cancelEdit(state) {
      state.list.map(t => {
        if (t.id === state.editedTodo) {
					t.edit = false;
				}
      })
      state.editedTodo = null
    }
  };
