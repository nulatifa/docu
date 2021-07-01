<template>
  <v-data-table
    :headers="headers"
    :items="document"
    :sort-by="['title','size']"
    :sort-desc="[false, true]"
    :single-select="singleSelect"
    item-key="title"
    show-select
    multi-sort
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      > 
        <v-toolbar-title>My Document</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :to = "{ name: 'Upload'}"
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              position=sticky
            >
              Upload
            </v-btn>
          </template>
          <template v-slot:top>
            <v-switch
              v-model="singleSelect"
              label="Single select"
              class="pa-3"
           ></v-switch>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Edit Document</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="File name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="300px">
          <v-card>
            <v-card-subtitle class="text-h5">Are you sure you want to move this file to bin?</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
      >
        mdi-star-outline
      </v-icon>
      <v-icon
        small
        class="mr-2"
      >
        mdi-download
      </v-icon>
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      singleSelect: false,
      selected:[],
      headers: [
        {
          align: 'start',
          sortable: false,
        },
        { text: 'File name', value:'title'},
        { text: 'Type', value: 'type' },
        { text: 'Size', value:'size'},
        { text: 'Date', value: 'cal', sortable:false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      document: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        type: 0,
        cal:0,
        size: 0,
      },
      defaultItem: {
        title: '',
        type: 0,
        cal:0,
        size: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        this.document = [
          {
          title:'KK',
          cal:'2-3-2020',
          size:'658 kb',
          type:'png',
          done:false
        },
        {
          title:'KTP',
          cal:'1-5-2020',
          size:'807 kb',
          type:'pdf',
          done:false
        },
        {
          title:'SIM',
          cal:'12-12-2020',
          size:'508 kb',
          type:'png',
          done:false,
        },
        {
          title:'CV',
          cal:'11-11-2020',
          size:'658 kb',
          type:'jpg',
          done:false,
        },
        {
          title:'Surat Keterangan Sehat',
          cal:'2-5-2020',
          size:'208 kb',
          type:'jpg',
          done:false,
        },
        {
          title:'Surat Keterangan Aktif Kuliah',
          cal:'10-10-2020',
          size:'366 kb',
          type:'pdf',
          done:false
        },
        {
          title:'Hasil Rontgen',
          cal:'9-10-2020',
          size:'907 kb',
          type:'pdf',
          done:false
        },
        {
          title:'KTM',
          cal:'9-9-2020',
          size:'976 kb',
          type:'jpg',
          done:false
        },
        {
          title:'Kartu Pegawai',
          cal:'9-8-2020',
          size:'786 kb',
          type:'pdf',
          done:false
        },
        {
          title:'Akta Kelahiran',
          cal:'7-8-2020',
          size:'999 kb',
          type:'png',
          done:false
        },
      ]
    },
      editItem (item) {
        this.editedIndex = this.document.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.document.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.document.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.document[this.editedIndex], this.editedItem)
        } else {
          this.document.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
<style lang="scss">
.v-application--is-ltr .v-data-footer__select .v-select {
  margin: 3px 0 23px 34px !important;
}
.v-card__subtitle.text-h5{
  font-size: 16px !important;
  padding:24px !important;
}
</style>