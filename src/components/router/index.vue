<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import cards from "@/components/cards"

@Component({
    name: "Router",
    props: ["route"],
    components: {cards},
    functional: true
})
export default class extends Vue {
    
    get current_component() { return cards }

    render(h, ctx) {
        return h(cards)
    }

}
</script>