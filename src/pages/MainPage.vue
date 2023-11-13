<template>
  <ToDoInput @add="receiveInput" />
  <ToDoList title="To-do List" :list="todoList">
    <template #list-item="{ item }">
      <ToDoItem
        :todo="item"
        @set-done="setDoneToList"
        @delete="deleteTodoInList"
      />
    </template>
  </ToDoList>
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
  import ToDoInput from "@/components/ToDoInput.vue";
  import ToDoList from "@/components/ToDoList.vue";
  import ToDoItem from "@/components/ToDoItem.vue";

  import { onMounted, computed } from "vue";
  import { useStore } from "@/stores";
  import { TodoItem } from "@/models";

  const store = useStore();
  const todoList = computed(() => store.todoList);
  const doneList = computed(() => store.doneList);

  onMounted(() => {
    const initList = localStorage.getItem("t_TodoItems");

    if (initList !== null) {
      const list = JSON.parse(initList) as TodoItem[];
      store.allList = list;
    }
  });

  function setDoneToList(todo: TodoItem): void {
    store.setDoneToList(todo);
  }

  function deleteTodoInList({ title }: TodoItem): void {
    store.deleteToDoItem(title);
  }

  function receiveInput(value: TodoItem): void {
    store.pushFormDataToList(value);
  }
</script>
