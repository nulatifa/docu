<template>
  <v-data-table
    :headers="headers"
    :items="document"
    :sort-by="['entry', 'size']"
    :sort-desc="[false, true]"
    multi-sort
    class="elevation-1"
  ></v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            align: 'start',
            sortable: false,
          },
          { text: 'Title', value: 'title' },
          { text: 'Date', value: 'cal' },
          { text: 'Size', value:'size'},
          { text: 'Action', value:'icon'},
        ],
        document: [
        {
          title:'KK',
          cal:'2-3-2020',
          size:'658 kb',
          icon:'image/dok3.png'
        },
        {
          title:'KTP',
          cal:'1-5-2020',
          size:'807 kb'
        },
        {
          title:'SIM',
          cal:'12-12-2020',
          size:'508 kb'
        },
        {
          title:'CV',
          cal:'11-11-2020',
          size:'658 kb'
        },
        {
          title:'Surat Keterangan Sehat',
          cal:'2-5-2020',
          size:'208 kb'
        },
        {
          title:'Surat Keterangan Aktif Kuliah',
          cal:'10-10-2020',
          size:'366 kb'
        },
        {
          title:'Hasil Rontgen',
          cal:'9-10-2020',
          size:'907 kb'
        },
        {
          title:'KTM',
          cal:'9-9-2020',
          size:'976 kb'
        },
        {
          title:'Kartu Pegawai',
          cal:'9-8-2020',
          size:'786 kb'
        },
        {
          title:'Akta Kelahiran',
          cal:'7-8-2020',
          size:'999 kb'
        }
        ],
      }
    },
  }
</script>
<style>
.v-application--is-ltr .v-data-footer__select .v-select {
  margin: 3px 0 23px 34px !important;
}
</style>