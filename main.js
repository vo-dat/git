var vueInstance= new Vue({
    el:'#app',
    data: {
        title: 'Clother',
       price: 12000,
       class: 'box',
    },
    methods:{
        formatPrice(){
             var number= this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        
        },
        handlermouseMove(e){
            
           console.log(e);
        }
    },
    
});
// console.log(vueInstance);
