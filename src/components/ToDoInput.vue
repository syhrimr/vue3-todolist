<template>
  <form @submit.prevent="addToDoItem">
    <input v-model="todo" placeholder="Add your new to do item" />
    <input v-model="description" placeholder="Add detail to your to do item" />
    <button type="submit" title="Add">Add</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(["add"])

const todo = ref("");
const description = ref("");

function addToDoItem() {
  emits("add", {
    todo: todo.value,
    description: description.value,
    status: "onprogress"
  });

  todo.value = "";
  description.value = "";
}
</script>