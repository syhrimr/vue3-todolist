<template>
  <form class="todo-form" @submit.prevent="addToDoItem">
    <label>
      <span class="required">Title</span>
      <input
        v-model="title"
        type="text"
        placeholder="Add your new to do item"
      />
    </label>

    <label>
      <span>Description</span>
      <input
        v-model="description"
        type="text"
        placeholder="(Optional) Add detail to your to do item"
      />
    </label>

    <button type="submit" title="Add new Todo item">Add</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(["add"])

const title = ref<string>("");
const description = ref<string>("");

function addToDoItem(): void {
  emits("add", {
    title: title.value,
    description: description.value,
    isDone: false
  });

  title.value = "";
  description.value = "";
}
</script>

<style scoped lang="scss">
.todo-form {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;

    span.required {
      &::after {
        content: " *";
        color: red;
      }
    }
  }

  input {
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border-width: 1px;
    outline: 1px;
    margin-bottom: 0.75rem;
  }

  button {
    cursor: pointer;
    height: 2rem;
    border-radius: 0.5rem;
    border-width: 0px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:hover {
      transform: translateY(-2px);
    }
  }
}
</style>
