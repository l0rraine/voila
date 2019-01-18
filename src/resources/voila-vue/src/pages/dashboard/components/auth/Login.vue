<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-5">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>后台管理</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="person" name="login" label="邮箱或用户名"
                                                  type="text"></v-text-field>
                                    <v-text-field prepend-icon="lock" name="password" label="密码" id="password"
                                                  type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary">登录</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            drawer: null
        }),

        props: {
            source: String
        }
    };
</script>

<style scoped>
</style>
