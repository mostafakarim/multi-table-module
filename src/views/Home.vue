<template>
  <v-container>
    <h1>{{ $t('common.order') }}</h1>
    <multi-table :menu="menu" />
  </v-container>
</template>

<script>
import MultiTable from '../components/multi-table.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',

  components: {
    MultiTable,
  },
  computed: {
    ...mapState(['menu']),
  },
  async mounted() {
    await this.getMenu();
  },
  methods: {
    ...mapActions(['getMenu']),
  },
};
</script>
