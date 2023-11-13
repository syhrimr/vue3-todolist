<template>
  <nav class="nav-wrapper">
    <ul>
      <template v-for="item in props.navItem" :key="item.id">
        <li>
          <RouterLink :to="item.to">{{ item.name }}</RouterLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { PropType, defineProps } from "vue";
import { NavItem } from '@/models';

const props = defineProps({
  navItem: {
    type: Array as PropType<NavItem[]>,
    required: true,
    defaul: () => []
  }
});
</script>

<style lang="scss" scoped>
.nav-wrapper {
  margin-bottom: 5rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    padding: 0;
  }

  li {
    a {
      text-decoration: none;
      font-weight: 600;
      color: black;
      padding: 0.5rem;

      &:hover, &.router-link-active {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>