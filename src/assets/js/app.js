var app = new Vue({
  el: '#app',
  data: {
    message: 'Investment Comparator'
  }
});


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
        { text: 'Dashboard',
        feather: 'home',
        link: '#dashboard'},
        { text: 'Orders',
        feather: 'file',
        link: '#orders'},
        { text: 'Products',
        feather: 'shopping-cart',
        link: '#products'}

    ]
  }
})
