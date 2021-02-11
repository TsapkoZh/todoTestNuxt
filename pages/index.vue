<template>
  <div class="body">
    <h1 class="title">todos</h1>
      <div class="todoList">
        <Header />
        <TodoList 

        />
        <Footer />
      </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      todo: "",
    };
  },

  computed: {
    ...mapState(["todos", "editedTodo"]),
    ...mapGetters('todos', ["filteredTodos"]),
  },
}
</script>

<style scoped>
  .todoList {
	width: 32vw;
	margin: 4vw auto;
	background-color: white;
	background: white;
	box-shadow:
		0 .1vw .1vw rgba(0,0,0,0.15),
		0 .55vw 0 -.22vw rgb(255, 255, 255),
		0 .55vw .1vw -.2vw rgba(0,0,0,0.15),
		0 1.1vw 0 -.55vw rgb(255, 255, 255),
		0 1.1vw .1vw -.5vw rgba(0,0,0,0.15);
}

.title {
	margin: 2vw;
	text-align: center;
	color: rgb(86, 129, 86);
	font-family: arial, "Helvetica Neue", Helvetica, sans-serif;
	font-weight: 100;
	font-size: 6vw;
	opacity: .3;
}
</style>