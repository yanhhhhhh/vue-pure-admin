import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
  };
};

export const getMenuList = (data?: object) => {
  return http.request<Result>("post", "/api/get-menu-list", { data });
};
