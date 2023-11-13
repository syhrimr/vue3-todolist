import { defineStore } from "pinia";

import { TodoItem } from "@/models";

export interface StateModel {
  allList: TodoItem[];
}

export const useStore = defineStore("store", {
  state: () => ({
    allList: []
  } as StateModel),
  getters: {
    todoList: ({ allList }) => allList.filter(item => !item.isDone),
    doneList: ({ allList }) => allList.filter(item => item.isDone)
  },
  actions: {
    pushFormDataToList(value: TodoItem) {
      this.allList.unshift(value);
    },
    deleteToDoItem(title: String) {
      for (const i in this.allList) {
        if (this.allList[i].title === title) {
          this.allList.splice(parseInt(i), 1);
          break;
        }
      }
    },
    setDoneToList({ title, isDone }: TodoItem) {
      for (const i in this.allList) {
        if (this.allList[i].title === title) {
          this.allList[i].isDone = isDone;
          break;
        }
      }
    }
  }
})