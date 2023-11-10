<template>
  <div>
    <div class="item_text-wrapper">
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
    </div>

    <div class="item_buttons">
      <button type="button" title="Mark ToDo Item as Done" @click="setTodoItemDone">Done</button>
      <button type="button" title="Delete ToDo Item" @click="deleteTodoItem">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {}
  }
});

const emits = defineEmits(["setDone", "delete"])

const item = computed(() => props.todo);

function setTodoItemDone() {
  item.value.isDone = true;
  emits("setDone", item.value);
}

function deleteTodoItem() {
  emits("delete", item.value);
}
</script>