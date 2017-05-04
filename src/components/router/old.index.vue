<template>
    <div class="content">
        <component :is="current_component"/>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import cards from "@/components/cards"

@Component({
    name: "Router",
    props: ["route"],
    components: {cards},
})
export default class extends Vue {
    
    get current_component() { return cards }

}
</script>