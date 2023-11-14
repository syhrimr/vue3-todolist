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
      localStorage.setItem("t_TodoItems", JSON.stringify(this.allList));
    },
    deleteToDoItem(title: String) {
      for (const i in this.allList) {
        if (this.allList[i].title === title) {
          this.allList.splice(parseInt(i), 1);
          localStorage.setItem("t_TodoItems", JSON.stringify(this.allList));
          break;
        }
      }
    },
    setDoneToList({ title, isDone }: TodoItem) {
      for (const i in this.allList) {
        if (this.allList[i].title === title) {
          this.allList[i].isDone = isDone;
          localStorage.setItem("t_TodoItems", JSON.stringify(this.allList));
          break;
        }
      }
    },
    getListFromLocalStorage() {
      const initList = localStorage.getItem("t_TodoItems");

      if (initList !== null) {
        const list = JSON.parse(initList) as TodoItem[];
        this.allList = list;
      }
    }
  }
})