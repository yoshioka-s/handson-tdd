<template>
  <div class="task-list">
    <div class="head">Task Name</div>
    <div class="head">Started At</div>
    <div class="head">Finished At</div>
    <div class="head"></div>
    <div class="head"></div>
    <template v-for="task in tasks" :key="task.id">
      <div class="name">{{ task.name }}</div>
      <div class="started">{{ task.startedAt || '--:--' }}</div>
      <div class="finished">{{ task.finishedAt || '--:--' }}</div>
      <ElButton>Start</ElButton>
      <ElButton>Finish</ElButton>
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
  props: {
    tasks: Array
  },
  setup() {
    return {
      test: '',
    }
  },
})
</script>

<style lang="scss" scoped>
.task-list {
  display: grid;
  grid-template-columns: 200px 100px 100px 100px 100px;
  > .head {
    font-weight: bold;
  }
}
</style>

