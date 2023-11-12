<template>
  <h1>{{ title }}</h1>
  <ul class="list-wrapper">
    <template v-for="item in props.list" :key="item">
      <li>
        <slot name="list-item" :item="item"></slot>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
  import { defineProps, PropType } from "vue";
  import { TodoItem } from "@/models";

  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: "This is list"
    },
    list: {
      type: Object as PropType<TodoItem[]>,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
  .list-wrapper {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
</style>
