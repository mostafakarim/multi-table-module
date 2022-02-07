<template>
  <v-container>
    <h1>{{ $t('common.order') }}</h1>
    <multi-table />
  </v-container>
</template>

<script>
import MultiTable from '../components/multi-table.vue';

export default {
  name: 'Home',

  components: {
    MultiTable,
  },
};
</script>
