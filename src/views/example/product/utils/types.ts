// 虽然字段很少 但是抽离出来 后续有扩展字段需求就很方便了
// 新增编辑表单字段类型
interface FormItemProps {
  /** 产品名称 */
  productName: string;
  /** 产品编号 */
  productCode: string;
  /** 备注 */
  description: string;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
