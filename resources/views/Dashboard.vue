<template>
    <v-app>
        <v-navigation-drawer
                fixed
                clipped
                class="darken-4"
                app
                v-model="drawer">
            <v-list
                    dense
                    class="darken-4">
                <template v-for="(item, i) in items">
                    <v-layout
                            row
                            v-if="item.heading"
                            align-center
                            :key="i">
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                    </v-layout>
                    <v-divider
                            dark
                            v-else-if="item.divider"
                            class="my-3"
                            :key="i"></v-divider>
                    <v-list-tile
                            :key="i"
                            v-else
                            @click="handleTileAction">
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
            <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
            <span class="title ml-3 mr-5">{{title}}</span>
            <v-text-field
                    solo-inverted
                    flat
                    label="查找"
                    prepend-icon="search"></v-text-field>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>

        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Dashboard",
        data: () => ({
            drawer: null,
            title: '后台管理',
            items: [
                {icon: 'lightbulb_outline', text: 'Notes'},
                {icon: 'touch_app', text: 'Reminders'},
                {divider: true},
                {heading: 'Labels'},
                {icon: 'add', text: 'Create new label'},
                {divider: true},
                {icon: 'archive', text: 'Archive'},
                {icon: 'delete', text: 'Trash'},
                {divider: true},
                {icon: 'settings', text: 'Settings'},
                {icon: 'chat_bubble', text: 'Trash'},
                {icon: 'help', text: 'Help'},
                {icon: 'phonelink', text: 'App downloads'},
                {icon: 'keyboard', text: 'Keyboard shortcuts'}
            ]
        }),
        methods:{
            handleTileAction(){

            }
        },
        created(){

        }
    };
</script>

<style scoped>
</style>
