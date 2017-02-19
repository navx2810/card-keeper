<template>
    <div @click.stop.prevent="close" class="modal">
        <div @click.stop.prevent="" class="inner">
            <slot></slot>
            <p @click.stop.prevent="close" class="btn">Close</p>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from "vjs"


@Component({ name: "Modal" , props: ["data"] })
export default class extends Vue {
    
    close() { this.data.route = "/"; this.data.data = null }

}
</script>

<style lang="stylus" scoped>
.modal
    position fixed
    display flex
    justify-content center
    align-items center
    top 0
    left 0
    bottom 0
    right 0
    background hsla(200 10 10 .8)
.btn
    padding .5em
    color hsl(200 5 20)
    text-align center
    font-size 1.1em
    background hsl(200 5 50)
    cursor pointer

</style>