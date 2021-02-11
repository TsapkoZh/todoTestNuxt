<template>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <TodoEdit v-if="todo.edit" :todo="todo"/>
      <TodoItem v-else :todo="todo"/>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "TodoList",
  props:['todo'],

  data() {
    return {
      todoTextClass: 'todoText',
      toogleDoneClass: 'toogleDone'
    };
  },

  computed: {
    ...mapState(["todos", "editedTodo"]),
    ...mapGetters('todos', ["filteredTodos"]),
  },

  methods: {
    ...mapMutations({
      editTodo: "todos/editTodo"
    })
  }
};
</script>
