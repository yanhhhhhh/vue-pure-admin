<script setup lang="ts">
import ReCol from "@/components/ReCol";
import { ref } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    productName: "",
    productCode: "",
    description: ""
  })
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
  >
    <el-row :gutter="30">
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="产品名称" prop="productName">
          <el-input
            v-model="newFormInline.productName"
            clearable
            placeholder="请输入产品名称"
          />
        </el-form-item>
      </re-col>
      <re-col :value="12" :xs="24" :sm="24">
        <el-form-item label="产品标识" prop="productCode">
          <el-input
            v-model="newFormInline.productCode"
            clearable
            placeholder="请输入产品标识"
          />
        </el-form-item>
      </re-col>
      <re-col>
        <el-form-item label="description">
          <el-input
            v-model="newFormInline.description"
            placeholder="请输入description"
            type="textarea"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
