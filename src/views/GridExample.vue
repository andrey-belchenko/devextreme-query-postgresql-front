<script setup lang="ts">
import {
  DxDataGrid, DxPaging, DxFilterRow, DxScrolling, DxHeaderFilter, DxFilterPanel, DxRemoteOperations, DxSummary, DxTotalItem,
  DxExport, DxSelection, DxGroupPanel, DxGrouping,
} from 'devextreme-vue/data-grid';
import { CustomStore } from 'devextreme/common/data';


const columns: any[] = [
  {
    dataField: 'sale_id',
    caption: 'ID',
    dataType: 'number',
  },
  {
    dataField: 'product_category',
    caption: 'Category',
  },
  {
    dataField: 'product_name',
    caption: 'Product',
  },
  {
    dataField: 'customer_name',
    caption: 'Customer',
  },
  {
    dataField: 'sale_date',
    caption: 'Date',
    dataType: 'date',
    format: 'yyyy-MM-dd HH:mm',
  },
  {
    dataField: 'price',
    caption: 'Unit Price',
    dataType: 'number',
    format: { type: 'currency', precision: 2 },
  },
  {
    dataField: 'quantity',
    caption: 'Qty',
    dataType: 'number',
  },
  {
    dataField: 'amount',
    caption: 'Total',
    dataType: 'number',
    format: { type: 'currency', precision: 2 },
  },
  {
    dataField: 'payment_method',
    caption: 'Payment',
  },
  {
    dataField: 'status',
    caption: 'Status',
  },
  {
    dataField: 'is_refunded',
    caption: 'Refunded',
    dataType: 'boolean',
    alignment: 'center'
  }
];


const dataSource = new CustomStore({
  key: "sale_id",
  load: async (loadOptions) => {
    const response = await fetch("http://localhost:3000/sales", {
      method: "POST",
      body: JSON.stringify({ loadOptions }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
});

</script>

<!-- :columns="columns" -->
<template>
  <div :class="$style.grid">
    <DxDataGrid :columns="columns" :data-source="dataSource" :show-borders="false" :focused-row-enabled="true"
      :default-focused-row-index="0" :column-auto-width="true" :column-hiding-enabled="false" :show-column-lines="true"
      :sorting="{ mode: 'multiple' }" :show-row-lines="true" :hover-state-enabled="true" :allow-column-resizing="true"
      column-resizing-mode="widget">
      <DxRemoteOperations :filtering="true" :sorting="true" :group-paging="true" :summary="true" :grouping="true">
      </DxRemoteOperations>
      <DxPaging :enabled="false" />
      <DxFilterRow :visible="true" />
      <DxScrolling :useNative="true" mode="virtual" />
      <DxHeaderFilter :visible="true" />
      <DxFilterPanel :visible="true" />
      <DxGroupPanel :visible="true" />
      <DxGrouping :auto-expand-all="true" />
      <DxSelection mode="single" />
    </DxDataGrid>
  </div>
</template>

<style module>
.grid {
  /* background-color: aquamarine; */
  position: absolute;
  inset: 0;
}

.grid>:global(.dx-widget) {
  position: absolute;
  inset: 0;
}
</style>