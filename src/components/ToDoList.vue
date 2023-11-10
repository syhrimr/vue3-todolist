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

<script setup lang="ts">
import ToDoInput from './ToDoInput.vue';
import ToDoItem from './ToDoItem.vue';

import { ref, onMounted } from 'vue';
import { TodoItem } from "@/models";

const list = ref<TodoItem[]>([]);

onMounted(() => {
  list.value = [
    {
      title: "Lunch",
      description: "Lunch with banana",
      isDone: false
    }
  ]
});

function receiveInput(value: TodoItem): void {
  list.value.unshift(value);
}

function setDoneToList({ title, isDone }: TodoItem): void {
  for (let i in list.value) {
    if (list.value[i].title === title) {
      list.value[i].isDone = isDone;
      break;
    }
  }
}

function deleteTodoInList({ title }: TodoItem): void {
  for (let i in list.value) {
    if (list.value[i].title === title) {
      list.value.splice(parseInt(i), 1);
      break;
    }
  }
}
</script>
