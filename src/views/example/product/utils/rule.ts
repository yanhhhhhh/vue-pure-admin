import { reactive } from "vue";
import type { FormRules } from "element-plus";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
  productName: [
    { required: true, message: "产品名称为必填项", trigger: "blur" }
  ],
  productCode: [
    { required: true, message: "产品标识为必填项", trigger: "blur" }
  ]
});
