<template>
  <form @submit.prevent="addToDoItem">
    <input v-model="title" placeholder="Add your new to do item" />
    <input v-model="description" placeholder="(Optional) Add detail to your to do item" />
    <button type="submit" title="Add">Add</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(["add"])

const title = ref("");
const description = ref("");

function addToDoItem() {
  emits("add", {
    title: title.value,
    description: description.value,
    isDone: false
  });

  title.value = "";
  description.value = "";
}
</script>