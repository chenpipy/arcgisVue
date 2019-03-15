<template>
    <div>
        <p>{{msg}}</p>
        <p>{{msg1}}</p>
    </div>
</template>

<script>
    let _ = require('lodash')
    export default {
        name: "Myautotest",
        data(){
            return {
                msg:"测试数据",
                msg1:'msg1'
            }
        },
        mounted: function () {
            //统计面积
            let a = {1: {a: 10}, 2: {a: 20}}
            let b = {1: {b: 11}, 2: {b: 21}, 3: {b: 31}}
            var itemArr = _.union(Object.keys(a), Object.keys(b))
            console.log(itemArr)
            var result = []
            itemArr.forEach(function (item) {
                result.push(Object.assign({}, a[item] || {a: 0}, b[item] || {b: 0}, {degree: item}))
            })
            this.msg = result

            let m = 2
        }
    }
</script>

<style scoped>
    p{
        height: 30px;
        font-size: 16px;
        line-height: 30px;
    }

</style>