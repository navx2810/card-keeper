<template>
	<div class="searchFilter">
		<div class="search">
			<input title="Enter a search term for a card." placeholder="Search for a card.." type="text" v-model="term">
		</div>
		
		<div v-if="cards.selected" class="filter">
			<p @click="ChangeFilter('all')" :class="{ selected : (filter === 'all') }" title="Return to showing all cards in the list.">Back to All</p>
			<p @click="ChangeFilter('mine')" :class="{ selected: (filter === 'mine') }" title="Return to showing only my cards in the list.">Back to Mine</p>
		</div>
		<div v-else class="filter">
			<p @click="ChangeFilter('all')" :class="{ selected : (filter === 'all') }" title="Show all cards in the list.">All</p>
			<p @click="ChangeFilter('mine')" :class="{ selected: (filter === 'mine') }" title="Only show my cards in the list.">Mine</p>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Repo from "@/repo"

@Component({
	name: "Filter",
	props: ["cards"],
	components: {},
	watch: {
		filter() { this.ChangeFilteredCards() },
		term() { this.ChangeFilteredCards() }
	}
})
export default class extends Vue {
	
	filter = "all"
	term = ""

	// created() { this.cards.collection = Repo.FindCard(null, this.cards.limit) }
	created() { Repo.Find(this.filter, null, this.cards.limit).then(cards => this.cards.collection = cards) }

	ChangeFilter(fltr) {
		this.filter = fltr
		if(this.cards.selected) this.cards.selected = null
	}

	ChangeFilteredCards() {
		Repo.Find(this.filter, this.term, this.cards.limit).then(cards => this.cards.collection = cards)
		// this.cards.collection = (this.filter === 'all') ? Repo.FindCard(this.term, this.cards.limit) : Repo.FindCollection(this.term, this.cards.limit)
	}

}
</script>