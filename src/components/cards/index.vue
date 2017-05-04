<template>
    <div class="content">
        <CardFilter :cards="cards" />
        <viewer :cards="cards"/>
    </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import CardFilter from "./filter"
import viewer from "./viewer"


@Component({
    name: "Cards",
    props: [],
    components: {CardFilter, viewer},
})
export default class extends Vue {
    
    cards = {
        collection: [],
        limit: 20,
        selected: ""
    }

}
</script>