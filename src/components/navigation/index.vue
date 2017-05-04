<style lang="stylus" scoped>
    .navigation
        flex 0 0 auto
        display flex
        align-items center
        // padding 1em 0
        justify-content flex-end
        color hsl(200 5 80)
        background hsl(200 10 20)
        border-bottom 3px solid hsl(200 10 10)
        a
            padding 1em
            cursor pointer
        a:hover
            background hsl(200 10 30)
</style>

<template>
    <div class="navigation">
        <a title="Save your collection." @click="ChangeRoute('save')" class="btn">save</a>
        <a title="Change the applications options." @click="ChangeRoute('options')" class="btn">options</a>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    name: "Navigation",
    props: ["route"],
    components: {},
})
export default class extends Vue {
    
    ChangeRoute(route) { this.$emit("route_changed", route) }
}
</script>