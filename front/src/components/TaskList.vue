<template>
  <div class="task-list">
    <div class="head">Task Name</div>
    <div class="head">Started At</div>
    <div class="head">Finished At</div>
    <div class="head -span3"></div>
    <template v-for="task in tasks" :key="task.id">
      <div class="name">{{ task.name }}</div>
      <div class="started">{{ formatTime(task.startedAt) }}</div>
      <div class="finished">{{ formatTime(task.finishedAt) }}</div>
      <ElButton type="primary" @click="start(task.id)">Start</ElButton>
      <ElButton @click="finish(task.id)">Finish</ElButton>
      <ElButton type="danger" @click="deleteTask(task.id)">Delete</ElButton>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import moment from 'moment'
import { Task } from '../types/task'

export default defineComponent({
  name: 'TaskList',

  emits: ['patch', 'delete'],

  props: {
    tasks: Array as PropType<Task[]>
  },

  setup(props, { emit }) {
    const formatTime = (str: string) => {
      if (str) {
        return moment(str).format('hh:mm')
      }
      return '--:--'
    }
    const start = (id: number) => emit('patch', { id, state: 'started' })
    const finish = (id: number) => emit('patch', { id, state: 'finished' })
    const deleteTask = (id: number) => emit('delete', id)
    return {
      formatTime,
      start,
      finish,
      deleteTask
    }
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
