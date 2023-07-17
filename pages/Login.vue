<template>
  <v-container>
    <v-sheet height="200" width="600" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="email"
          label="email"
          :rules="emailRules"
        />

        <v-text-field
          v-model="password"
          label="password"
          :rules="passwordRules"
        />

        <v-btn type="submit" block class="mt-2" @click="login">
          Submit
        </v-btn>
      </v-form>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: 'FromLogin',
  data: () => ({
    email: 'kao@gmail.com',
    emailRules: [
      // eslint-disable-next-line arrow-parens
      value => {
        // eslint-disable-next-line curly
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      }
    ],
    password: '123456',
    passwordRules: [
    // eslint-disable-next-line indent, arrow-parens
     value => {
        // eslint-disable-next-line indent, curly
          if (value?.length > 3) return true

        return 'password 4'
      }
    ]
  }),
  methods: {
    login () {
      this.$axios.post('/auth/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        alert('ເຂົ້າສູ່ລະບົບສຳເລັດ')
        localStorage.setItem('Token', response.data.authentication.sessionToken)
        this.$router.push('/')
      },
      // eslint-disable-next-line indent
    (error) => {
        this.loading = true
        if (error) {
          alert('ກະລຸນາກວດສອບຄືນ')
        }
      })
    }
  }
}
</script>
