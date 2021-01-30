<template>
  <div class="task-list">
    <div class="head">Task Name</div>
    <div class="head">Started At</div>
    <div class="head">Finished At</div>
    <div class="head -span3"></div>
    <template v-for="task in tasks" :key="task.id">
      <div class="name">{{ task.name }}</div>
      <div class="started">{{ task.startedAt || '--:--' }}</div>
      <div class="finished">{{ task.finishedAt || '--:--' }}</div>
      <ElButton type="primary" @click="start(task.id)">Start</ElButton>
      <ElButton @click="finish(task.id)">Finish</ElButton>
      <ElButton type="danger" @click="deleteTask(task.id)">Delete</ElButton>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task } from '../types/task'

interface State {
  tasks: Task[]
}

export default defineComponent({
  name: 'TaskList',
  emits: ['patch', 'delete'],
  props: {
    tasks: Array
  },
  setup(props, { emit }) {
    const start = (id: number) => emit('patch', { id, state: 'started' })
    const finish = (id: number) => emit('patch', { id, state: 'finished' })
    const deleteTask = (id: number) => emit('delete', id)
    return { start, finish, deleteTask }
  }
})
</script>

<style lang="scss" scoped>
.task-list {
  display: grid;
  grid-template-columns: 200px 100px 100px 100px 100px 100px;
  > .head {
    font-weight: bold;
    &.-span3 {
      grid-column-end: span 3;
    }
  }
}
</style>
