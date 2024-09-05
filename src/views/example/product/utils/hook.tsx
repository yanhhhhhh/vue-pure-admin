import { addDialog } from "@/components/ReDialog";
import { message } from "@/utils/message";
import type { messageTypes } from "@/utils/message";
import type { PaginationProps } from "@pureadmin/table";
import { deviceDetection } from "@pureadmin/utils";
import dayjs from "dayjs";
import { h, onMounted, reactive, ref, toRaw } from "vue";
import editForm from "../form.vue";
import type { FormItemProps } from "../utils/types";
import { getList, saveUpdate } from "@/api/example/product";

export function useHook() {
  const form = reactive({
    productName: "",
    productCode: "",
    isDelete: ""
  }); //顶部表格查询条件
  const curRow = ref();
  const formRef = ref();
  const dataList = ref([]);

  const isShow = ref(false);
  const loading = ref(true);

  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  // 表格列，prop接口字段名，label表头显示名称
  const columns: TableColumnList = [
    {
      label: "产品编号",
      prop: "id"
    },
    {
      label: "产品名称",
      prop: "productName"
    },
    {
      label: "产品标识",
      prop: "productCode"
    },

    {
      label: "description",
      prop: "description"
    },
    {
      label: "创建时间",
      prop: "gmtCreate",
      minWidth: 160,
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 210,
      slot: "operation"
    }
  ];

  function handleDelete(row) {
    // 先调用删除接口，再进行下面操作
    message(`您删除了${row.id}的这条数据`, { type: "success" });
    onSearch();
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
    pagination.currentPage = 1;
    onSearch();
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
    pagination.currentPage = val;
    onSearch();
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }

  async function onSearch() {
    loading.value = true;
    const { data } = await getList({
      ...toRaw(form),
      pageSize: pagination.pageSize,
      pageIndex: pagination.currentPage
    });
    dataList.value = data.rows;
    pagination.total = data.totalSize;
    pagination.pageSize = data.pageSize;

    loading.value = false;
  }
  // 重置表单
  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };
  //新增和编辑
  function openDialog(title = "新增", row?: any) {
    addDialog({
      title: `${title}产品`,
      props: {
        // 表单数据，编辑回显
        formInline: {
          productName: row?.productName ?? "",
          productCode: row?.productCode ?? "",
          description: row?.description ?? ""
        }
      },
      width: "40%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as FormItemProps;
        function chores(type: messageTypes) {
          const messageTypeTips = type === "success" ? "成功" : "失败";
          message(
            `您${title}了产品名称为${curData.productName}的这条数据 ${messageTypeTips}`,
            {
              type: type
            }
          );
          if (type == "success") {
            done(); // 关闭弹框
            onSearch(); // 刷新表格数据
          }
        }
        FormRef.validate(async valid => {
          if (valid) {
            console.log("curData", curData);
            // 表单规则校验通过
            if (title === "新增") {
              // 实际开发先调用新增接口，再进行下面操作
              const { code } = await saveUpdate(curData);
              if (code === 0) {
                chores("success");
                return;
              }
              chores("error");
            } else {
              const { code } = await saveUpdate({
                id: row.id,
                ...curData
              });
              if (code === 0) {
                chores("success");
                return;
              }
              chores("error");
            }
          }
        });
      }
    });
  }

  /** 高亮当前权限选中行 */
  function rowStyle({ row: { id } }) {
    return {
      cursor: "pointer",
      background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
    };
  }

  /** 数据权限 可自行开发 */
  // function handleDatabase() {}

  onMounted(async () => {
    onSearch();
  });

  return {
    form,
    isShow,
    curRow,
    loading,
    columns,
    rowStyle,
    dataList,

    pagination,

    onSearch,
    resetForm,
    openDialog,

    handleDelete,

    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
