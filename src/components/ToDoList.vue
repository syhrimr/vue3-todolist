<template>
  <ToDoInput @add="receiveInput" />
  <ul class="list-wrapper">
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

import { ref, onMounted, watch } from 'vue';
import { TodoItem } from "@/models";

const list = ref<TodoItem[]>([]);

onMounted(() => {
  const initList = localStorage.getItem("t_TodoItems");

  if (initList !== null) {
    list.value = JSON.parse(initList);
  }
});

watch(
  () => list.value,
  (value) => {
    localStorage.setItem("t_TodoItems", JSON.stringify(value));
  },
  {
    deep: true
  }
);

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

<style lang="scss" scoped>
.list-wrapper {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
