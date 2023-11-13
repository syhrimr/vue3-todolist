import FormPage from "@/pages/FormPage.vue";
import TodoPage from "@/pages/TodoPage.vue";
import DonePage from "@/pages/DonePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/form"
  },
  {
    path: "/form",
    name: "Form",
    component: FormPage
  },
  {
    path: "/todo",
    name: "TodoList",
    component: TodoPage
  },
  {
    path: "/done",
    name: "DoneList",
    component: DonePage
  }
];

export default routes;