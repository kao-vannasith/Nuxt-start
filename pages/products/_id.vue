<template>
  <div>
    <Nav />
    <v-container v-if="product">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="product.ratings"
              dense
              size="20"
            />
            <v-chip
              v-for="(t, i) in product.tags"
              :key="`prod${product.id}-${i}`"
              small
              label
              outlined
              class="mr-1"
            >
              {{ t }}
            </v-chip>
          </div>
          <br>
          <v-row>
            <v-col cols="5">
              <p class="mt-5 mb-7">
                {{ product.description }}
              </p>
              <v-btn
                min-height="45"
                min-width="170"
                class="text-capitalize"
                color="primary"
                @click="$store.commit('cart/AddToCart', product)"
              >
                Add To Cart
              </v-btn>
            </v-col>
            <v-col cols="7">
              <v-img
                width="100%"
                class="el rounded-lg"
                height="50vh"
                :src="require(`./../../static/${product.image}`)"
              />
            </v-col>
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
  name: 'ProductId',
  data () {
    return {
      product: null,
      products: [
        {
          id: 1,
          name: 'ສ້າງໃບຮັບເງິນມັດຈຳ',
          onSale: false,
          tags: ['Headphone', 'People'],
          image: '1.PNG',
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
      ]
    }
  },
  async created () {
    const d = await this.products
    this.product = d[parseInt(this.$route.params.id - 1)]
  }
}
</script>

<style></style>
