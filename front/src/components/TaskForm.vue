<template>
  <ElForm form="form" @submit.prevent="$emit('submit', form)">
    <ElFormItem label="Task Name">
      <ElInput v-model="form.name" />
    </ElFormItem>
    <ElButton type="primary" native-type="submit">Create Task</ElButton>
  </ElForm>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  emits: ['submit'],
  setup() {
    const form = reactive({ name: '' })
    return {
      form
    }
  }
})
</script>

