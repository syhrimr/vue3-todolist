<template>
  <div>
    <div class="item_text-wrapper">
      <h1>{{ props.todo.title }}</h1>
      <p>{{ props.todo.description }}</p>
    </div>

    <div class="item_buttons">
      <button>Done</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {}
  }
})
</script>