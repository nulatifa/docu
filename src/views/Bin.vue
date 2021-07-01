<template>
  <div class="home">
    <v-list
      two-line
      flat
      class="pt-0"
    >
      <div
        v-for="task in tasks"
        :key="task.id"
      >    
        <v-list-item
            @click="doneTask(task.id)"
            :class="{'cyan lighten-5' :task.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="default"
                class="ce"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="til">{{task.title}}</v-list-item-title>
              <v-list-item-subtitle class="til">{{task.cal}}</v-list-item-subtitle>
            </v-list-item-content>
            <template>
            <div class="text-center">
            <v-menu
                open-on-hover
                top
                offset-y
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                icon
                @click.stop
                dark
                v-bind="attrs"
                v-on="on"
                >
                  <v-icon color="grey">mdi-information</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-icon>{{ item.icon }}</v-icon>
                <v-list-item-title class="op">{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
            </div>
            </template>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {
      tasks:[
        {
          id:1,
          title:'SIM A',
          cal:'2-4-2020',
          done:false
        },
        {
          id:2,
          title:'SIM C Lama',
          cal:'5-5-2020',
          done:false
        },
        {
          id:3,
          title:'Akta Tanah',
          cal:'12-11-2020',
          done:false
        },
        {
          id:4,
          title:'SK',
          cal:'11-12-2020',
          done:false
        },
        {
          id:5,
          title:'Surat Keterangan Bebas Narkoba',
          cal:'7-5-2020',
          done:false
        },
        {
          id:6,
          title:'Surat Keterangan Kelurahan',
          cal:'10-9-2020',
          done:false
        },
        {
          id:7,
          title:'Surat Izin Sakit',
          cal:'18-10-2020',
          done:false
        },
        {
          id:8,
          title:'Kartu Perpustakaan',
          cal:'9-12-2020',
          done:false
        },
        {
          id:9,
          title:'Nota Pajak',
          cal:'10-8-2020',
          done:false
        }
      ],
      items: [
        { title: 'Restore', icon: 'mdi-delete-restore'},
        { title: 'Delete', icon:'mdi-delete'}
      ]
    }
  },
  methods:{
    doneTask(id){
       let task=this.tasks.filter(task => task.id === id)[0]
       task.done = !task.done
    },
    deleteTask(id){
      this.tasks=this.tasks.filter(task =>task.id !== task.id)
    }
  }
}
</script>

<style>
.til{
  padding: 0px;
  font-family: "Cambria";
  font-size: 16px !important;
}
.ce{
  padding-left: 150%;
  margin-left: 100%;
}
</style>
