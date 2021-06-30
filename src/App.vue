<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer" app
    color= #e7efef
    >
      <v-list-item>
         <v-list-item-avatar>
          <v-img src="image/penguin.png" contain sizes="30px"></v-img>
         </v-list-item-avatar>
         <v-list-item-content>
          <v-list-item-title class="tee">
            RheaRee
          </v-list-item-title>
          <v-list-item-subtitle class="suub">
            RheaRee@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item v-for="item in items"
        :key="item.title" 
        :to="item.to"
        link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>    

    <v-app-bar
      app
      color= #235a83
      dense
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="tilts">Toba Document System</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-text-field
        @focus="searchClosed=false"
        @blur="searchClosed=true"
        v-model="search"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        class="mt-1 expand "
        :class="{ 'closed' :searchClosed && !search }"
        solo
        background-color=#235a83
        dense
      ></v-text-field>
      <v-btn icon :to="{ name: 'Login'}">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    <template>
      <div class="text-center">
        <v-menu
          open-on-hover
          top
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content class="utama">
                <v-img src="image/penguin.png" class="gmb"></v-img>
                <v-spacer></v-spacer>
                <v-list-item-title class="nm">RheaRee</v-list-item-title>
                <v-spacer></v-spacer>
                <v-list-item-subtitle class="em">RheaRee@gmail.com</v-list-item-subtitle>
                <v-spacer></v-spacer>
                <v-btn icon
                  :to="{name:'Login'}"
                  class="ico">
                  <v-icon>mdi-logout-variant</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-home',to:'/' },
          { title: 'Setting', icon:'mdi-account-cog', to:'/Setting'},
          { title: 'Bin', icon:'mdi-delete', to:'/Bin'},
          { title: 'About', icon: 'mdi-information', to:'/About'}
      ],
      search:null,
      searchClosed:true
    }),
  }
</script> 
<style lang="scss">
.nm{
  font-size: 16px;
}
em{
  font-size: 14px;
  padding: 20px;
}
.tilts {
  font-size: 20px;
  font-family: "Cambria";
}
.gmb{
  width: 5px !important;
}
.utama{
  text-align: center;
  background: white ;
  padding: 20px 20px;
  font-family: "Cambria";
}
.v-content__wrap{
  background-color: white!important;
}
.v-main__wrap {
    background-color:grey !important;
}
.suub {
  font-size: 14px;
  font-family: "Cambria";
  font-weight: 100;
}
.tee {
  font-size: 16px;
  font-family: "Cambria";
  font-weight: 100;
  text-align: left;
}
.v-input.expand {
  transition: max-width 0.5s;  
}
.v-input.expand .v-input__slot:before .v-input.expand .v-input__slot:after {
  border-color: transparent;
}
.v-input.expand.closed {
  max-width: 45px;
}
.v-input__control {
  width: 50%;
  margin-top: 23px;
}
.ico{
  margin: 20px 0;
  padding: 50px 0;
  background-color: white!important;
  color: white;
}
</style>
