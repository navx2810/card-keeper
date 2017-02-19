<template>
    <div class="card-viewer">
       <!-- <div class="box back">
            <p @click="back" class="btn back">Back to search</p>
        </div> -->

        <div class="inner">
            <div class="box image">
                <img class="face" :src="imgsrc" :alt="name">
            </div>

            <div class="box meta">
                <table>
                    <thead>
                        <tr>
                            <td>{{meta.name}}</td>
                            <td v-if="meta.manaCost" > <img v-for="color in colors" :src="colorSrc(color)" alt="color"> </td>
                        </tr>
                    </thead>
                    <tr v-if="meta.type">
                        <td>Type</td>
                        <td>{{meta.type}}</td>
                    </tr>
                    <tr v-if="meta.text">
                        <td>Text</td>
                        <td>{{meta.text}}</td>
                    </tr>
                    <tr v-if="meta.power">
                        <td>Power</td>
                        <td>{{meta.power}}</td>
                    </tr>
                    <tr v-if="meta.toughness">
                        <td>Toughness</td>
                        <td>{{meta.toughness}}</td>
                    </tr>
                </table>
    
            </div>
        </div>
    </div>
</template>


<script>
import {Component, Vue} from "vjs"

@Component({
    name: "CardViewer",
    props: ["name","meta"]
})
export default class extends Vue {

    get asJson() { return JSON.stringify(this.meta, null, '\t') }

    back() { this.$emit("finish") }

    get imgsrc() { return `http://gatherer.wizards.com/Handlers/Image.ashx?name=${this.meta.imageName.split(" ").join("+")}&type=card` }

    colorSrc(color) {
        return `http://gatherer.wizards.com/Handlers/Image.ashx?size=medium&name=${color}&type=symbol`
    }

    get colors() { return this.meta.manaCost.match( /[A-z0-9]/g ) }

}
</script>

<style lang="stylus" scoped>
.card-viewer
    flex 1 1 auto
    display flex
    flex-direction column

.btn
    font-weight 800
    color hsl(200 50 50)
    text-decoration underline
    flex 0 0 auto
    cursor pointer
    
.inner
    flex 1 1 auto
    display flex
    flex-wrap wrap

.image, .meta
    display flex
    flex 1 1 auto

.image, .meta
    justify-content center
    align-items center

img
    border-radius 13px
    border-horizontal-spacing 2px
    border-vertical-spacing 2px

td
    padding .5em 2em
    word-wrap normal
    max-width 32em
td:first-child
    font-weight 800
</style>