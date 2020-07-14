<template>
    <div id="app">
        <div>hi</div>
    </div>
</template>

<script>

    import {reactive} from './reactivity';

    //使用 proxy 进行代理 可以理解为 拦截
    //VUE3的核心优化就在 proxy ，相当于他会去带代理当前的对象，当这个对象发生改变时,会进行相应的拦截
    const state = reactive({name: 'wang',arr:[1,2,3]});
    state.arr[0] = 1;
    // console.log(state)


    // effect(()=>{
    //   console.log(state.name)
    // })

    // state.name = 'zhen'


</script>

