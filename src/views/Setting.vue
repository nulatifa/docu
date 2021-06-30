<template>
  <v-card
    class="mx-auto"
  >
    <v-list
      two-line
      subheader
    >
      <v-subheader>General</v-subheader>
      <v-avatar 
        size="180"
        class="center">
        <img src="image/cute.jpg">
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="pro prof">Profile photo</v-list-item-title>
          <v-list-item-subtitle class="pro profil">Change your profile photo</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      subheader
      two-line
      flat
    >
      <v-subheader>Notifications</v-subheader>

      <v-list-item-group
        v-model="settings"
        multiple
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="prof">Sound</v-list-item-title>
              <v-list-item-subtitle class="profil">Allow sound notifications</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="prof">Pop Up</v-list-item-title>
              <v-list-item-subtitle class="profil">Allow pop-up notifications</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-subheader>Advanced</v-subheader>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="prof">Cookies</v-list-item-title>
              <v-list-item-subtitle class="profil">Enable cookies</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="prof">Personalized Ads</v-list-item-title>
              <v-list-item-subtitle class="profil">Enable personalized ads</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-subheader>Security</v-subheader>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="prof">Save password</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="prof">Change password</v-list-item-title>
              <v-list-item-subtitle class="profil">Current password</v-list-item-subtitle>
              <p><input type="password" v-on:keyup.enter="submit" class="pass" ></p>
              <v-list-item-subtitle class="profil">New password</v-list-item-subtitle>
              <p><input type="password" v-on:keyup.enter="submit" class="pass"></p>
              <v-list-item-subtitle class="profil">Retype new password</v-list-item-subtitle>
              <p><input type="password" v-on:keyup.enter="submit" class="pass"></p>
              <v-btn color="info" class="mi">submit</v-btn>
              <v-btn color="danger" class="mit">cancel</v-btn>
            </v-list-item-content>
        </v-list-item>
      </v-list-item-group>      
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      settings: [],
    }),
  }
</script>

<style>
.pro{
    text-align: center;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.prof{
    font-size: 14px !important;
    margin-top: 1px;
    padding: auto;
}
.profil{
    font-size: 12px; 
    margin-bottom: 1px;
    padding: auto;
}
p{      
    width: 100%;
    box-sizing: border-box;
    border: 2px;
    border-radius: 4px;
    outline: 2px;
}
.pass{
    border: 1px solid black;
    position:static;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 26px;
    max-width: 72px;
    padding: 0 16px;
    font-weight: 450;
    font-size: 12px;
}
.mit{
    padding-left: 12px;
}
.mi{
    margin-top: 2px;
}
</style>