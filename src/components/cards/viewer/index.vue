<template>
    <Single @updated="UpdateCard" v-if="selected" :card="selected" @added="AddCard"/>
    <List v-else :cards="cards" @selected="ChangeSelectedCard"/>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import List from "./list"
import Single from "./single"
import Repo from "@/repo"

@Component({
    name: "Viewer",
    props: ["cards"],
    components: {List, Single}
})
export default class extends Vue {

    get selected() { return this.cards.selected }

    ChangeSelectedCard(card) {
        console.log(`changing selected card to ${card.name}`)
        this.cards.selected = card
    }

    AddCard(card) {
        Repo.AddCard(card)
        card.foils = 0
        card.normals = 0
    }

    UpdateCard(card) {
        Repo.UpdateCard(card)
    }

}
</script>

<style lang="stylus" scoped>
    div
        max-height 100%
</style>
