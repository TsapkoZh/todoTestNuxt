<template>
  <div class="header">
    <div class="wrapper">
      <button 
        class="allDoneBTN" 
        @click="allDone(todo)"
      >
        ∟
      </button>
    </div>
    <input 
      class="newTodo"
      type="text" 
      @keyup.enter="addTodo" 
      placeholder="What needs to be done?"
    >
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      todo: ""
    };
  },

  computed: {
    ...mapState(["todos", "editedTodo"]),
  },

  methods: {
    ...mapMutations({
      allDone: 'todos/allDone',
    }),

    addTodo (event) {
      this.$store.commit('todos/add', event.target.value)
      event.target.value = ''
    },
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
	  width: 2.5vw;
    transform: translate(-50%, -10%);
  }

  .allDoneBTN {
    width: 100%;
    height: 70%;
    border: none;
    outline: none;
    margin: .5vw;
    background-color: white;
    font-size: 1.3vw;
    opacity: .3;
    transition: opacity 1s;
    transform: rotate(-45deg);
  }

  .allDoneBTN:hover {
    opacity: .6;
  }

  .newTodo { 
    width: 25vw;
    height: 2.5vw;
    font-size: 1.2vw;
    margin-left: 1vw;
    padding: .5vw;
    outline: none;
    border: 0;
}

  input::placeholder {
    color: rgb(129, 129, 129) !important;
    font-style: italic;
  }
</style>