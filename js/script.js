
const {createApp} = Vue;

createApp({

  data(){
    return{
      isActive: true,
      empty: false,
      counter:0,
      images: [
      "img/01.webp",
      "img/02.webp",
      "img/03.webp",
      "img/04.webp",
      "img/05.webp"],

    }
  },

  methods:{
    nextButton(){   
      if(this.counter < (this.images.length - 1)){
        this.counter++;
      }
      else{
        this.counter = 0;
      }
    },

    prevButton(){
      if(this.counter > 0){
        this.counter--;
      }
      else{
        this.counter = 4;
      }
    },

    thumbsOnClick(i){
      console.log(i);
      this.counter = i
    },

    autoPlay(){
      setTimeout(() => {
        this.nextButton()
      }, 4000);
    }
  },

  mounted(){
    this.autoPlay()
  }

}).mount('#app');