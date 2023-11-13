<template>
    <ToDoList title="Done List" :list="doneList">
      <template #list-item="{ item }">
      <ToDoItem
        :todo="item"
        @set-done="setDoneToList"
        @delete="deleteTodoInList"
      />
      </template>
    </ToDoList>
  </template>
  
  <script lang="ts" setup>
  import ToDoList from "@/components/ToDoList.vue";
  import ToDoItem from "@/components/ToDoItem.vue";
  
  import { TodoItem } from "@/models";
  
  import { computed } from "vue";
  import { useStore } from "@/stores";
  
  const store = useStore();
  const doneList = computed(() => store.doneList);
  
  function setDoneToList(todo: TodoItem): void {
    store.setDoneToList(todo);
  }
  
  function deleteTodoInList({ title }: TodoItem): void {
    store.deleteToDoItem(title);
  }
  </script>