<template>
  <div class="todo">
    <div 
      v-bind:class="[{completed:todo.done}, toogleDoneClass]" 
      @click="toggle(todo)" 
      :id="todo.id"
    />
    <p 
      @dblclick="todoEdit(todo)" 
      v-bind:class="[{done:todo.done}, todoTextClass]"
    >
      {{ todo.text }}
    </p>
    <button class="remove" @click="removeTodo(todo)">&times;</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

  export default {
    name: "TodoItem",
    props:['todo'],

    data() {
      return {
        todoTextClass: 'todoText',
        toogleDoneClass: 'toogleDone'
      };
    },

    methods: {
      ...mapMutations({
        removeTodo: 'todos/remove',
        toggle: 'todos/toggle',
        todoEdit: 'todos/todoEdit',
      }),
    },
  }
</script>

<style scoped>
  .todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5vw 1vw;
    border-top: .06rem solid rgb(233, 233, 233);
  }

  .toogleDone {
    width: 1.35rem;
    height: 1.35rem;
    border: 1px gray solid;
    border-radius: 50%;
    margin-left: .6rem;
    transition: color .2s;
  }

  .toogleDone:hover {
    border-color: rgb(109, 167, 109);
  }

  .completed {
    border-color: rgb(109, 167, 109);
    background-image: url(../assets/greenCheck.png);
    background-position: center;
    background-size: 70% 90%;
    background-repeat: no-repeat;
  }

  .todoText {
    display: inline-block;
    overflow-wrap: break-word;
    width: 20vw;
    font-family: arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1.05vw;
    transition: .5s;
    color: rgb(66, 66, 66);
  }

  .done {
    text-decoration: line-through;
    color: rgb(168, 168, 168);
  }

  .remove {
    color: rgb(214, 214, 214);
    font-size: 1.3rem;
    font-weight: bolder;
    transition: color .6s;
    margin-right: .3rem;
  }

  .remove:hover {
    color: rgb(165, 65, 65);
  }
</style>