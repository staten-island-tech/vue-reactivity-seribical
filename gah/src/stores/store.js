import { reactive } from 'vue'

export const currency = reactive({
  count: 0,
})

export const persecond = reactive({
  count: 0
})

function add(){
  currency.count=currency.count+persecond.count
}

setInterval(add, 1000);