<template>
  <input
    id="edit"
    class="edit"
    type="text"
    ref='focusMe'
    :value="todo.text"
    @keypress.enter="doneEdit"
    @keyup.esc="cancelEdit"
    @blur="cancelEdit"
  >
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: "TodoEdit",
  props: {
    todo: Object
  },

  mounted () {
    this.$refs.focusMe.focus()
  },

  computed: {
    ...mapState(["todos", "editedTodo"]),
  },

  methods: {
    ...mapMutations({
      cancelEdit: 'todos/cancelEdit',
    }),

    doneEdit (event) {
      this.$store.commit('todos/doneEdit', event.target.value)
    },
  },
};
</script>