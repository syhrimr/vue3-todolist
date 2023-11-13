<template>
  <ToDoInput @add="receiveInput" />
</template>

<script lang="ts" setup>
import ToDoInput from "@/components/ToDoInput.vue";

import { useStore } from "@/stores";
import { TodoItem } from "@/models";

const store = useStore();

function receiveInput(value: TodoItem): void {
  store.pushFormDataToList(value);
}
</script>
