<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped class="darken-4" app>
      <v-list dense class="darken-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3" />
          <v-list-tile v-else :key="i" @click="handleTileAction">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer" />
      <span class="title ml-3 mr-5">
        {{ title }}
      </span>
      <v-text-field solo-inverted flat label="查找" prepend-icon="search" />
      <v-spacer />
      <v-menu offset-y>
        <v-btn
          slot="activator" color="black" dark flat large
          icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>当前用户：{{ username }}</v-list-tile-title>
          </v-list-tile>
          <v-divider />
          <v-list-tile>
            <v-list-tile-title @click="logout">
              退出
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content />
  </v-app>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    drawer: null,
    title: '后台管理',
    items: [
      { icon: 'lightbulb_outline', text: 'Notes' },
      { icon: 'touch_app', text: 'Reminders' },
      { divider: true },
      { heading: 'Labels' },
      { icon: 'add', text: 'Create new label' },
      { divider: true },
      { icon: 'archive', text: 'Archive' },
      { icon: 'delete', text: 'Trash' },
      { divider: true },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Trash' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Keyboard shortcuts' }
    ]
  }),
  computed: {
    username () {
      return this.$auth.user().display_name
    }
  },
  methods: {
    handleTileAction () {

    },
    logout () {
      this.$auth.logout({
        redirect: { name: 'login' }
      })
    }
  },
  created () {
  }
}
</script>

<style scoped>
</style>
