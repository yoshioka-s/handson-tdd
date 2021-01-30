<template>
  <div id="app">
    <TaskList class="list" :tasks="state.tasks" @patch="patchTask" @delete="deleteTask" />
    <TaskForm class="form" @submit="createTask" />
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
    const fetchTasks = async () => {
      const res = await axios.get('/tasks')
      state.tasks = res.data
    }
    fetchTasks()

    const createTask = async (task: Task) => {
      await axios.post('/tasks', task)
      fetchTasks()
    }

    const patchTask = async (task: Task) => {
      await axios.patch(`/tasks/${task.id}`, task)
      fetchTasks()
    }
    const deleteTask = async (id: number) => {
      console.log('delete')
      await axios.delete(`/tasks/${id}`)
      fetchTasks()
    }
    return {
      state,
      createTask,
      patchTask,
      deleteTask
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
  width: 800px;
  > .list {
    margin-bottom: 60px;
  }
}
</style>
