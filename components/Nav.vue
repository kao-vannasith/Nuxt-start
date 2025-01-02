<!-- eslint-disable vue/v-slot-style -->
<template>
  <div>
    <v-app-bar
      color="surface"
      height="80"
      class="el"
      :style="{ padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '' }"
      app
    >
      <v-toolbar-title
        class="text-md-h5 font-weight-bold pointer"
        @click="$router.push('/')"
      >
        <img src="./../static/15ffa6f1-9506-4d26-9136-fa90f1cf92f9.jpg" width="200" alt="">
      </v-toolbar-title>
      <v-btn nuxt to="/Login" class="mr-md-2">
        <h3>ລາຄາ</h3>
      </v-btn>
      <v-menu
        v-for="(cat,i) in menu"
        :key="'category_'+i"
        offset-y
      >
        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            color=""
            dark
            v-on="on"
          >
            {{ cat.name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(tab, index) in cat.tabs"
            :key="'tab_'+ index"
            @click="addTab({'tab':tab.id,'toside':'left'})"
          >
            <v-list-item-title>{{ tab.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn nuxt to="/Login" class="mr-md-2">
        <h3>ຄູ່ມືການໃຊ້ງານ</h3>
      </v-btn>
      <v-btn nuxt to="/Login" class="mr-md-2">
        <h3>ຜົນປະໂຫຍດ</h3>
      </v-btn>
      <v-spacer />

      <v-btn nuxt to="/Login" class="mr-md-2">
        <h3>login</h3>
      </v-btn>
      <v-btn nuxt to="/Login" class="mr-md-2">
        <h3>Register</h3>
      </v-btn>
      <!-- <v-btn nuxt to="/products" class="mr-md-2" icon>
        <v-icon size="20">
          mdi-store-outline
        </v-icon>
      </v-btn> -->
      <v-badge
        v-if="$store.state.cart.cart.length > 0"
        overlap
        :content="`${$store.state.cart.cart.length}`"
      >
        <v-btn to="/cart" nuxt icon>
          <v-icon size="20">
            mdi-cart-outline
          </v-icon>
        </v-btn>
      </v-badge>
      <v-btn v-else nuxt to="/cart" icon>
        <v-icon size="20">
          mdi-cart-outline
        </v-icon>
      </v-btn>
      <v-divider vertical class="mx-md-5 mx-2" />
      <v-btn
        icon
        @click="toggleTheme"
      >
        <v-icon size="20">
          mdi-brightness-7
        </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  data: () => ({
    menu: [{
      name: 'ຟັງຊັນ',
      tabs: [{ id: 'layout-3dForce', name: '3d Force' }, { id: 'layout-props', name: 'Properties' }]
    }
    ]
  }),
  methods: {
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style></style>
