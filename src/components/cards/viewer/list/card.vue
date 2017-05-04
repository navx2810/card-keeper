<template>
    <div @click="SelectCard" :key="card.id" class="card">
        <div :class="rarity" class="top">
            <p class="rarity">{{ rarity }}</p>
            <div class="fill"></div>
            <div>
                <div v-if="card.normals" title="Normal card count." class="count">
                    <p>{{card.normals}}</p>
                </div>
                <div v-if="card.foils" title="Foil card count." class="count foil">
                    <p>{{card.foils}}</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <h3>{{card.name}}</h3>
            <h4>{{card.setName}}</h4>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    name: "Card",
    props: ["card"],
    components: {},
})
export default class extends Vue {

    SelectCard() { this.$emit("card-selected", this.card) }

    get rarity() {
        switch(this.card.rarity) {
            case "Uncommon": return "uncommon"
            case "Rare": return "rare"
            case "Mythic Rare": return "mythic"
            case "Special": return "special"
            default: return "common"
        }
    }

}
</script>
