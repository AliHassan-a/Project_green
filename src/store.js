import Vue from "vue";

export const store = Vue.observable({
    isMobile: true,
});

window.addEventListener("load", function(e){
    store.isMobile = window.innerWidth > 1024 ? false : true;
    console.log(store.isMobile);
})
window.addEventListener("resize", function(e){
    store.isMobile = e.target.innerWidth > 1024 ? false : true;
})