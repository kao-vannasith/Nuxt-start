<!-- eslint-disable vue/no-template-shadow -->
<!-- eslint-disable vue/no-lone-template -->
<template>
  <div>
    <Nav />
    <v-container>
      <v-row dense>
        <v-col md="3">
          <div style="position: sticky; top: 92px">
            <v-text-field
              v-model="search"
              outlined
              prepend-inner-icon="mdi-magnify"
              clearable
              placeholder="Search"
            />
            <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              color="transparent"
              subheader
            >
              <v-subheader>Categories</v-subheader>
              <v-list-item
                v-for="(c, i) in categories"
                :key="`category${i}`"
                link
              >
                <v-list-item-avatar>
                  <v-img :src="c.image" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ c.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col md="9">
          <v-row>
            <template>
              <v-fade-transition v-for="(p, i) in filteredProducts" :key="`product${p.id}-${i}`">
                <v-col cols="12" md="6">
                  <v-card
                    nuxt
                    :to="`/products/${p.id}`"
                    color="surface"
                    class="el ma-2 mb-5 mr-5"
                  >
                    <v-img :src="p.image" height="300">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            indeterminate
                          />
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title class="text-md-body-1 font-weight-bold">
                      {{ p.name }}
                    </v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      {{ $formatMoney(p.price) }}
                    </v-card-subtitle>
                    <v-card-text>
                      <v-chip
                        v-for="(t, i) in p.tags"
                        :key="`prod${p.id}-${i}`"
                        x-small
                        label
                        outlined
                        class="mr-1"
                      >
                        {{ t }}
                      </v-chip>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-fade-transition>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <br><br>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Silky Smooth Beats',
          onSale: false,
          tags: ['Headphone', 'People'],
          image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi',
          price: 20000,
          salePrice: null,
          ratings: 4.0
        },
        {
          id: 2,
          name: 'Lady Luck Is Smiling',
          onSale: true,
          tags: ['Perfume', 'Women'],
          image: 'https://images.pexels.com/photos/6062560/pexels-photo-6062560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi',
          price: 3500,
          salePrice: 3000,
          ratings: 4.5
        },
        {
          id: 3,
          name: 'Green Nike Zoom',
          onSale: true,
          tags: ['Nike', 'Men'],
          image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi',
          price: 10500,
          salePrice: 9000,
          ratings: 4.5
        },
        {
          id: 4,
          name: 'New Home Living Room Set',
          onSale: false,
          tags: ['Home', 'Pretty'],
          image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi',
          price: 100500,
          salePrice: null,
          ratings: 4
        },
        {
          id: 5,
          name: 'Classic Man Watch',
          onSale: true,
          tags: ['Watch', 'Men'],
          image: 'https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi',
          price: 50500,
          salePrice: 40000,
          ratings: 3.5
        }
      ],
      categories: [
        {
          id: 1,
          name: 'Shoes',
          image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 2,
          name: 'Handbags',
          image: 'https://images.pexels.com/photos/45981/pexels-photo-45981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 3,
          name: 'Perfumes',
          image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 4,
          name: 'Cosmetics',
          image: 'https://images.pexels.com/photos/1377034/pexels-photo-1377034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id: 5,
          name: 'Food',
          image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ],
      search: null
    }
  },
  computed: {
    filteredProducts () {
      if (!this.products || !this.search) { return this.products }
      return this.products.filter((p) => {
        const s = this.search.toLowerCase()
        const n = p.name.toLowerCase()
        const price = p.price.toString()
        const sprice = p.salePrice?.toString() || ''
        const r = p.ratings.toString()
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        )
      })
    }
  }
}
</script>

<style></style>
