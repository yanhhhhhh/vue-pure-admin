import { $t } from "@/plugins/i18n";
import { example } from "@/router/enums";

export default {
  path: "/example",
  redirect: "/example/product",
  meta: {
    icon: "ri:table-line",
    title: $t("menus.pureExample"),
    rank: example
  },
  children: [
    {
      path: "/example/product",
      name: "product",
      component: () => import("@/views/example/product/index.vue"), //文件路径
      meta: {
        title: "product"
      }
    }
  ]
} satisfies RouteConfigsTable;
