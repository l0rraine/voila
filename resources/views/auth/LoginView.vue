<template>
  <v-app>
    <Snackbar />
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-5">
              <v-toolbar dark color="primary">
                <v-toolbar-title>后台管理</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="login" prepend-icon="person" name="login"
                    label="邮箱或用户名"
                    type="text" />
                  <v-text-field
                    v-model="password" prepend-icon="lock" name="password"
                    label="密码"
                    type="password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="doLogin(login,password)">
                  登录
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { doLogin } from '@/utils/api'
import Snackbar from '@/components/snackbar'
export default {
  name: 'LoginView',
  components: {
    Snackbar
  },
  data: () => ({
    drawer: null,
    login: '',
    password: ''
  }),
  props: {
    source: String
  },
  methods: {
    async doLogin (login, password) {
      const data = await doLogin({
        login,
        password
      })
      // console.log(data)
    }
  }
}
</script>

<style scoped>
</style>
