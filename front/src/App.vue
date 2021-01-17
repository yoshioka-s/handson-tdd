<template>
  <div id="app">
    <TaskList :tasks="state.tasks" />
    <TaskForm @submit="createTask" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import axios from 'axios'
import { Task } from './types/task'

interface State {
  tasks: Task[]
}

export default defineComponent({
  name: 'App',
  components: {
    TaskForm,
    TaskList,
  },

  setup() {
    const state: State = reactive({ tasks: [{ id: 1, name: 'sample' }] })
    const createTask = async (task: Task) => {
      console.log(task)
      const res = await axios.post('/tasks')
      state.tasks.push(res.data)
    }
    const fetchTasks = async () => {
      const res = await axios.get('/tasks')
      state.tasks = res.data
    }
    fetchTasks()
    return {
      state,
      createTask,
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}
</style>
