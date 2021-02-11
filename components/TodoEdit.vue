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

<style scoped>
  .edit {
    width: 81%;
    height: 7.2vh;
    font-family: arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1.05vw;
    margin-left: 6vw;
    padding: .5vw;
    outline: none;
    border: .1vw solid rgb(71, 114, 71);
  }
</style>