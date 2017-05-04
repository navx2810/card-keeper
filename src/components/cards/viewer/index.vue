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

    ChangeSelectedCard(card) {
        console.log(`changing selected card to ${card.name}`)
        this.cards.selected = card
    }

    AddCard(card) {
        console.log("adding card")
        console.log(card)
        Repo.AddCard(card)
        card.foils = 0
        card.normals = 0
        this.cards.selected = card
    }

    UpdateCard(card) {
        console.log("updating card")
        console.log(card)
        Repo.UpdateCard(card)
        this.cards.selected = card // This shouldn't need to be here, the component should handle the view status
    }

    render(h) {
        // return h(list, { props: { cards: ctx.props.cards } })
        return (this.cards.selected) ? <Single onUpdate={this.UpdateCard} onAdded={this.AddCard} card={this.cards.selected}/> : <List cards={this.cards} onSelected={this.ChangeSelectedCard}/>
    }

}
</script>

<style lang="stylus" scoped>
    div
        max-height 100%
</style>
