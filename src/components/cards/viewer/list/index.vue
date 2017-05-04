<template>
    <div class="cards">
        <card @card-selected="SelectCard" :key="c.id" v-for="c in cards.collection" :card="c"/>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import card from "./card"

@Component({
    name: "List",
    props: ["cards"],
    components: { card },
})
export default class extends Vue {

    SelectCard(card) { this.$emit("selected", card) }

}
</script>