export default {
  LoadCart (state) {
    const cart = localStorage.getItem('myCart')
    if (cart) {
      state.cart = JSON.parse(cart)
    }
  },
  AddToCart (state, product) {
    const itemfound = state.cart.find(p => p.product.id === product.id)
    if (!itemfound) {
      state.cart.push({ product, quantity: 1 })
    }
    if (itemfound) {
      itemfound.quantity += 1
    }

    localStorage.setItem('myCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 4000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end'
    })
  },
  DecreaseItemCount (state, index) {
    const item = state.cart[index]
    if (!item) { return }
    if (item.quantity === 1) {
      state.cart.splice(index, 1)
    } else {
      item.quantity -= 1
    }
    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end'
    })
  },
  RemoveCartItem (state, index) {
    state.cart.splice(index, 1)

    this.$swal({
      toast: true,
      text: 'Item Removed.',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end'
    })
  },
  IncreaseItemCount (state, index) {
    const item = state.cart[index]
    item.quantity += 1
    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end'
    })
  },
  ClearCart (state) {
    state.cart = []
    localStorage.removeItem('myCart')
  }
}
