import { http, type PageResult, type Result } from "@/utils/http";

export interface TProduct {
  productCode: string;
  productName: string;
  manufacturer: string;
  status: string;
  parametersAnnotation: string;
  parametersValue: string;
  description: string;
  id: string;
  gmtCreate: string;
  gmtModify: string;
  creator: string;
  modifier: string;
  isDelete: string;
}
export const prefix = "/api/codeup-api/IotProductInfoRpc";
// list
export const getList = (params?: object, data?: object) => {
  return http.request<PageResult<TProduct>>(
    "post",
    `${prefix}/selectAll.json`,
    {
      params, // params是query参数
      data // data是body参数
    }
  );
};
export const saveUpdate = (data: Partial<TProduct>) => {
  return http.request<Result<boolean>>("post", `${prefix}/saveUpdate.json`, {
    data // data是body参数
  });
};
