<template>
  <ToDoInput @add="receiveInput" />
  <ul>
    <template v-for="item in list" :key="item">
      <li>
        <ToDoItem
          :todo="item"
          @setDone="setDoneToList"
          @delete="deleteTodoInList"
        />
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

function setDoneToList({ title, isDone }) {
  for (let i in list.value) {
    if (list.value[i].title === title) {
      list.value[i].isDone = isDone;
      break;
    }
  }

  console.log(list.value);
}

function deleteTodoInList({ title }) {
  const index = list.value.indexOf(title);
  list.value.splice(index, 1);
}
</script>
