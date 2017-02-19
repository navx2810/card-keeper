<template>
<transition name="fade">
    <div class="toast">
        <div>
            <transition-group  name="fade">
                <p key="{ msg + ':' + i }" v-for="(msg, i) in msgs" class="msg">{{msg}}</p>
            </transition-group>
        </div>
        <p @click="close" class="close">x</p>
    </div>
</transition>
</template>

<script>
import { Component, Vue } from "vjs"

@Component({
    name: "Toast",
    props: ["messages", "secs"]
})
export default class extends Vue {
    created() {
        setTimeout(() => {
            this.close()
        }, this.secs*1000)
    }

    close() { this.$emit("done") }

    get msgs() { return (Array.isArray(this.messages)) ? this.messages : [this.messages] }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
    transition all .5s
.fade-enter, .fade-leave-to
    transform translateY(2em)
    opacity 0

p
    margin 0
    font-weight 800
.msg
    padding 1
.toast
    position fixed
    text-align center
    bottom 0
    left 0
    right 0
    margin auto
    width fit-content
    border-radius .25em
    padding 1em
    display flex
    align-items center
    background hsl(200 50 80)
    color hsl(200 50 30)
    font-weight 800
.close
    margin-left 1em
    font-size 1.2em
    cursor pointer

</style>