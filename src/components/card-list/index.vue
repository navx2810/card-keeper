<template>
<CardViewer v-if="currentCard" :name="currentCardName" :meta="currentCard" @finish="clearCurrentCard" />
<div v-else class="card-list">
    <div class="box input">
        <input type="text" v-model="term" placeholder="Enter a search term for a card. . .">
    </div>

    <div class="filters">
        <p @click="changeFilter('all')" :class="{ selected: isAll }">All</p>
        <p @click="changeFilter('mine')" :class="{ selected: isMine }">Only Mine</p>
    </div>

    <div class="list">
        <CardItem @remove="removeCard" @add="addCard" @preview="setCurrentCard" v-for="res in results" :name="res" :data="getCard(res)"/>
        <p @click="showMore" v-show="resultsLimitReached">displaying {{maxResults}} results.. click here to show more</p>
    </div>
</div>
</template>

<script>
import { Component, Vue, Watch } from "vjs"
import List from "AllCards.json"
import Data from "yml-loader!lib/data.yml"
import CardViewer from "./card-viewer"
import CardItem from "./card-item"

import { find } from "lodash"

@Component({
    name: "CardList",
    components: { CardViewer, CardItem },
    props: ["data"]
})
export default class extends Vue {

    term = ""

    @Watch("term")
    resetLimit(val) { this.offset = 1 }

    searchOption = "all"
    currentCardName = ""
    maxResults = 20
    offset = 1

    get resultsOffset() { return this.maxResults * this.offset }
    get resultsLimitReached() { return this.resultsOffset === this.results.length }
    get currentCard() { return (!!this.currentCardName) ? List[this.currentCardName] : undefined }
    get isMine() { return this.searchOption === "mine" }
    get isAll() { return this.searchOption === "all" }
    get results() { return (( this.isAll ) ? this.findCardInAllList() : this.findCardInMyList()).slice(0, this.resultsOffset) }
    
    findCardInAllList() { return Object.keys(List).filter(this.matches) }
    findCardInMyList() { return this.data.cards.filter(card => {return this.matches(card.name)}).map(c => c.name) }

    matches(card) { return card.toLowerCase().includes(this.term.toLowerCase()) }

    showMore() { this.offset += 1 }
    changeFilter(val) { this.searchOption = val }

    // setCurrentCard(card) { this.currentCardName = card }
    setCurrentCard(card) { Data.modals.route="/card"; Data.modals.data = List[card] }
    clearCurrentCard() { this.currentCardName = "" }

    getCard(card) { return find(this.data.cards, { name: card }) }
    addCard(card) { 
        this.data.cards.push( { name: card, count: 1 } ) 
        Data.messages.push(`${card} was added.`)
    }
    removeCard(card){ 
        this.data.cards = this.data.cards.filter(c => c !== card) 
        Data.messages.push(`${card.name} was removed.`)
    }

}
</script>

<style lang="stylus" scoped>

.card-list
    flex 1 1 auto
    display flex
    flex-direction column

.input, .filters
    flex 0 0 auto
.list
    flex 1 1 auto

.list
    overflow-y auto
    p
        text-align center
        padding 1em
        background hsl(140 30 50)
        font-weight 800
        color hsl(150 50 20)

.input
    display flex
    input
        flex 1 1 auto
        padding 1em
        font-size 1.2em
        text-align center
        border none
        background hsl(200 10 10)
        color #fff
        border-radius .2em

.filters
    display flex
    justify-content space-between
    background hsl(200 5 30)
    p
        cursor pointer
        flex 1 1 auto
        text-align center
        padding 1em
        color hsl(200 10 10)
    .selected
        background hsl(200 50 50)
        color hsl(200 100 20)

input
    font-family "Lato", "Helvetica"
    
.list::-webkit-scrollbar-track
	-webkit-box-shadow inset 0 0 6px rgba(0,0,0,0.3)
	background-color hsl(200, 10, 5)

.list::-webkit-scrollbar
	width 8px
	background-color #F5F5F5

.list::-webkit-scrollbar-thumb
	border-radius 10px
	-webkit-box-shadow inset 0 0 6px rgba(0,0,0,.3)
	background-color #4095bf



</style>