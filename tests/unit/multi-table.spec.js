import multiTable from '@/components/multi-table.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { VContainer, VDataTable } from 'vuetify/lib';
import Vuex from 'vuex';

const storeActionGetUpdateMock = {
  total: 0,
  categories: [
    {
      name: 'Burgers',
      id: 1,
      products: [
        {
          name: 'BigMac',
          sku: 10001,
          selected: false,
          price: 10,
          quantity: 1,
        },
        {
          name: 'Double BigMac',
          sku: 10002,
          selected: false,
          price: 15,
          quantity: 1,
        },
      ],
    },
    {
      name: 'Boissons',
      id: 2,
      products: [
        {
          name: 'Coca-Cola',
          sku: 20001,
          selected: false,
          price: 3,
          quantity: 1,
        },
        {
          name: 'Sprite',
          sku: 20002,
          selected: false,
          price: 4,
          quantity: 1,
        },
      ],
    },
    {
      name: 'Dessert',
      id: 3,
      products: [
        {
          name: 'McFlurry',
          sku: 30001,
          selected: false,
          price: 2,
          quantity: 1,
        },
        {
          name: 'Sundae',
          sku: 30002,
          selected: false,
          price: 3,
          quantity: 1,
        },
      ],
    },
  ],
};

const localVue = createLocalVue();
localVue.use(Vuex);
Vue.use(Vuetify);
const vuetify = new Vuetify();

const updateMenu = jest.fn().mockResolvedValue();
const store = new Vuex.Store({
  modules: {
    state: {
      menu: storeActionGetUpdateMock,
    },
  },
  actions: {
    getMenu: jest.fn(() => Promise.resolve({ ...storeActionGetUpdateMock })),
    updateMenu,
  },
});

const mocks = {
  $t: () => {},
};
const stubs = {
  VDataTable,
  VContainer,
};

const propsData = {
  expanded: [],
  selected: [],
  singleExpand: false,
  selectedMenu: {},
  categoryHeaders: [
    {
      fixed: true,
      value: 'data-table-expand',
      width: '10%',
    },
    {
      text: 'Item',
      align: 'end',
      sortable: false,
      value: 'name',
      cellClass: 'title-cell',
      width: '90%',
    },
  ],
  productHeaders: [
    {
      text: 'Product',
      align: 'start',
      sortable: false,
      value: 'name',
      width: '50%',
    },
    {
      text: 'Price',
      align: 'start',
      sortable: false,
      value: 'price',
      width: '20%',
    },
    {
      text: 'Quantity',
      align: 'end',
      sortable: false,
      value: 'quantity',
      width: '20%',
    },
  ],
};

const options = {
  localVue,
  mocks,
  stubs,
  vuetify,
  propsData,
  store,
};

describe('<multi-table />', () => {
  it('should render the component', () => {
    // Act
    const wrapper = shallowMount(multiTable, options);

    // Assert
    expect(wrapper.vm).toBeTruthy();
  });

  it('should call action updateMenu when price is selected', async () => {
    // Act
    const wrapper = shallowMount(multiTable, options);
    await wrapper.vm.updatePrice(storeActionGetUpdateMock);
    // Assert
    expect(updateMenu).toHaveBeenCalled();
  });
});
