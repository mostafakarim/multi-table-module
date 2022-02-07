<template>
  <!-- eslint-disable vue/valid-v-slot -->
  <v-container>
    <v-data-table
      v-if="selectedMenu"
      :headers="categoryHeaders"
      :items="selectedMenu.categories"
      :single-expand="false"
      v-model="expanded"
      hide-default-header
      hide-default-footer
      item-key="name"
      show-expand
      class="elevation-1"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="pa-0">
          <v-data-table
            :headers="productHeaders"
            :items="item.products"
            v-model="selected"
            hide-default-footer
            item-key="name"
            class="rounded-0"
          >
            <template v-slot:item.selected="{ isSelected, item }">
              <v-checkbox
                hide-details
                :value="isSelected"
                v-model="item.selected"
                class="ma-0 d-inline-block"
                @change="updatePrice"
              />
            </template>
            <template v-slot:item.price="{ item }">
              {{ item.price }} €
            </template>
            <template v-slot:item.quantity="{ item }">
              <input
                type="number"
                @change="updatePrice"
                min="0"
                v-model="item.quantity"
              />
            </template>
          </v-data-table>
        </td>
      </template>
      <template v-if="selectedMenu.total >= 0" v-slot:body.append="{}">
        <td class="text-left px-4 py-2">{{ $t('common.total') }}</td>
        <td class="text-right px-4 py-2">{{ selectedMenu.total }} €</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MultiTable',
  data() {
    return {
      expanded: [],
      selected: [],
      singleExpand: false,
      selectedMenu: {},
      categoryHeaders: [
        {
          text: 'Item',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '90%',
        },
        {
          fixed: true,
          value: 'data-table-expand',
          width: '10%',
          align: 'right',
        },
      ],
      productHeaders: [
        {
          text: this.$t('common.product'),
          align: 'start',
          sortable: false,
          value: 'name',
          width: '50%',
        },
        {
          text: this.$t('common.price'),
          align: 'start',
          sortable: true,
          value: 'price',
          width: '10%',
        },
        {
          text: this.$t('common.quantity'),
          align: 'end',
          sortable: false,
          value: 'quantity',
          width: '20%',
        },
        {
          text: this.$t('common.select'),
          fixed: true,
          value: 'selected',
          sortable: false,
          width: '20%',
          align: 'end',
        },
      ],
    };
  },
  computed: {
    ...mapState(['menu']),
  },
  async mounted() {
    await this.getMenu();
    this.selectedMenu = this.menu;
  },
  methods: {
    ...mapActions(['getMenu', 'updateMenu']),
    updatePrice: async function () {
      await this.updateMenu(this.selectedMenu);
    },
  },
};
</script>
<style lang="scss">
input[type='number'] {
  background: white;
  border: 1px black solid;
  text-align: center;
}
</style>
