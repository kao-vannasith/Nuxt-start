<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>
    <h1>image</h1>
    <div v-if="!form.image" class="featured-image" @click="$refs.fileInputX.click()">
      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVuNjU_AIjnDIJ9p2HTJslgOesbCdf8y-Ly6JO7sKFJAT-Bd4H0Wv1sFYYQ&s" :width="300" />
    </div>
    <div v-else class="featured-image" @click="$refs.fileInputX.click()">
      <v-img :src="form.image" :width="300" />
    </div>
    <div>
      <input v-model="form.image" type="text" style="display: none">
    </div>
    <input ref="fileInputX" name="resume" type="file" style="display:none" @change="onFileChange">
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        image: null
      }
    }
  },
  methods: {
    async onFileChange ($event) {
      const file = $event.target.files[0]
      const forData = new FormData()
      forData.append('product_img', file)
      const res = await axios.post('http://192.168.100.96:3000/api/pro_img/insert', forData, { headers: { x_access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0YzBiOWZhMDI4ZjE1MWM2ZTEwMjM4NyIsImVtYWlsIjoicm9vdEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjkwNTE4MzU2LCJleHAiOjE2OTExMjMxNTZ9.9Xwuo41Y4728qByeZH7ayCer_e2e-EYGqH-jPjpBwIs' } })
      this.form.image = res.data.imageUrl
    }
  }
}
</script>
