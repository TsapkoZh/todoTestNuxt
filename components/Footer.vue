<template>
  <div class="footer" v-if="list.length">
    <span class="todoCount">
      <strong>{{remaining}}</strong>
      items left
    </span>
    <div>
        <button 
          :class="{selected:visibility === 'all'}" 
          @click="changeFilter('all')"
        >
          All
        </button>
        <button 
          :class="{selected:visibility === 'active'}" 
          @click="changeFilter('active')"
        >
          Active
        </button>
        <button 
          :class="{selected:visibility === 'completed'}" 
          @click="changeFilter('completed')"
        >
          Complete
        </button>
      </div>
      <button 
          class="clearDoneBTN"
          @click="clearDone(todo)"
      >
          clear completd
      </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';

export default {
  props:['todo'],

  computed: {
    ...mapState('todos', ["list", "visibility"]),
    ...mapGetters('todos', ["remaining", "filters"])
  },

  methods: {
    selectFilter (filter) {
      this.$store.getters['validTasks'](filter)
    },

    ...mapMutations({
      clearDone: 'todos/clearDone',
      changeFilter: 'todos/changeFilter',
    }),
  },
}
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    height: 5.3vh;
    font-size: .8vw;
    padding: .5vw;
    border: 0;
    background-color: white;
    border-top: .01vw solid rgb(224, 224, 224);
  }

  .todoCount {
    color: grey;
  }

  button {
    border: .01vw white solid;
    border-radius: .2vw;
    padding: 0 .3rem;
    font-size: .7rem;
    cursor: pointer;
  }

  .selected {
    border: .01vw rgb(90, 143, 99) solid;
    border-radius:.2vw;
    outline: none;
  }

  .clearDoneBTN {
    color: gray;
    transition: color .6s;
  }

  .clearDoneBTN:hover {
    color: rgb(12, 12, 12);
  }
</style>