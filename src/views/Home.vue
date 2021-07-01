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
          :class="{'cyan lighten-5' : task.done}"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="default"
                class="cek"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <img :src='task.img' class="imagee">
              <v-list-item-title class="tilt">{{ task.title }}</v-list-item-title>
              <v-list-item-subtitle class="tilt">{{task.cal}}</v-list-item-subtitle>
            </v-list-item-content>
          <template>
            <div class="text-center">
              <v-menu
                open-on-hover
                top
                offset-y
              >
                <template v-slot:activator="{ on, attrs }">
                <v-icon
                  small
                  class="mr-2"
                >
                  mdi-star
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
          title:'Transkrip Nilai',
          cal:'4-3-2021',
          img:'image/dok3.png',
          done:false
        },
        {
          id:2,
          title:'Ijazah',
          cal:'5-5-2021',
          img:'image/dok1.png',
          done:false
        },
        {
          id:3,
          title:'Proposal',
          cal:'22-6-2021',
          img:'image/dok4.jpg',
          done:false
        }
      ],
      items: [
        { title: 'Edit', icon: 'mdi-pencil'},
        { title: 'Delete', icon:'mdi-delete'},
        { title: 'Download', icon:'mdi-download'},
        { title: 'Details', icon:'mdi-details'}
      ]
    }
  },
  methods:{
    doneTask(id){
      let task=this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== task.id)[0]
    }
  }
}
</script>

<style>
.imagee{
  max-width: 16.3%;;
}
.tilt{
  padding-left: 6.5mm;
  font-family: "Cambria";
}
.cek{
  margin-left: 15mm;
}
.op{
  font-family: "Cambria";
  margin-left: 10px;
}
.st{
  margin: 0px 20px 20px 0px;
  margin-bottom: 60px;
}
.v-card__text{
  background: white;
  height: 10px;
}
</style>
