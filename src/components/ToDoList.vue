<template>
  <ToDoInput @add="receiveInput" />
  <ul>
    <template v-for="item in list" :key="item">
      <li>
        <ToDoItem :todo="item" />
      </li>
    </template>
  </ul>
</template>

<script setup>
import ToDoInput from './ToDoInput.vue';
import ToDoItem from './ToDoItem.vue';

import { ref, onMounted } from 'vue';

const list = ref([]);

onMounted(() => {
  list.value = [
    {
      title: "Lunch",
      description: "Lunch with banana",
      isDone: false
    }
  ]
});

function receiveInput(value) {
  list.value.unshift(value);
}
</script>
