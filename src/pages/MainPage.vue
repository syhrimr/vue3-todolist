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

  import { ref, onMounted, watch } from "vue";
  import { TodoItem } from "@/models";

  const allList = ref<TodoItem[]>([]);
  const todoList = ref<TodoItem[]>([]);
  const doneList = ref<TodoItem[]>([]);

  onMounted(() => {
    const initList = localStorage.getItem("t_TodoItems");

    if (initList !== null) {
      const list = JSON.parse(initList) as TodoItem[];
      allList.value = list;
      todoList.value = list.filter((item) => !item.isDone);
      doneList.value = list.filter((item) => item.isDone);
    }
  });

  watch(
    () => allList.value,
    (value) => {
      localStorage.setItem("t_TodoItems", JSON.stringify(value));
      todoList.value = value.filter((item) => !item.isDone);
      doneList.value = value.filter((item) => item.isDone);
    },
    {
      deep: true
    }
  );

  function setDoneToList({ title, isDone }: TodoItem): void {
    console.log(isDone);
    for (let i in allList.value) {
      if (allList.value[i].title === title) {
        allList.value[i].isDone = isDone;
        if (isDone) {
          doneList.value.unshift(allList.value[i]);
        } else {
          todoList.value.unshift(allList.value[i]);
        }
        break;
      }
    }
  }

  function deleteTodoInList({ title }: TodoItem): void {
    for (let i in allList.value) {
      if (allList.value[i].title === title) {
        allList.value.splice(parseInt(i), 1);
        break;
      }
    }
  }

  function receiveInput(value: TodoItem): void {
    allList.value.unshift(value);
    todoList.value.unshift(value);
  }
</script>
