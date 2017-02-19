<template>
    <div class="item box">
        <p>{{name}}</p>

        <div class="btns">
            <p @click="preview" class="btn blue">Preview</p>

            <div key="a" v-if="data">
                <input type="number" min="1" v-model.number="count" >
                <p @click="remove" class="btn red">Remove</p>
            </div>
            <div key="b" v-else>
                <p @click="add"  class="btn green">Add</p>
            </div>
        </div>
    </div>
</template>


<script>
import { Component, Vue } from "vjs"

@Component({
    name: "CardItem",
    props: ["name", "data"]
})
export default class extends Vue {

    get count() { return this.data.count }
    set count(val) { this.data.count = (val < 1) ? 1 : val }

    preview() { this.$emit("preview", this.name) }
    add() { this.$emit("add", this.name) }
    remove() { this.$emit("remove", this.data) }

}
</script>

<style lang="stylus" scoped>
.fade-enter-active, .fade-leave-active
    transition all .5s
.fade-enter, .fade-leave-to
    opacity 0

.item
    font-weight 800
    display flex
    justify-content space-between
    align-items center
    margin-bottom .25em
.item:last-child
    margin 0
.btns
    flex 0 0 auto
    display flex
    input
        flex 0 0 auto
        font-size 1.2em
        /* background hsla(200 10 20 .5) */
        background hsl(200 10 10)
        color hsl(125 80 50)
        font-weight 800
        border none
        min-width 4em
        max-width 4em
        border-radius .2em
        text-align center
    div
        display flex

.btn
    padding 1em
    margin 0 .5em
    cursor pointer

.blue
    background hsl(200 50 50)
.green
    background hsl(125 50 50)
.red
    background hsl(0 50 50)

</style>