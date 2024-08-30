import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useTotalpriceStore  = defineStore('totalprice',()=>{
    const price1 = ref(10)
    const price2 = computed(()=>price1.value*3)
    const add = ()=>{
        price1.value += 2
    }
    return { price1, price2, add}
})