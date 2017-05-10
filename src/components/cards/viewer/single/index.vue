<template>
	<div class="viewer box">
		<img :src="imageSource" alt="Card">
		<div class="options">
			<p v-if="card.rarity" class="rarity" :class="card.rarity">{{card.rarity}}</p>
			<h3>{{card.name}}</h3>
			<h4 v-if="hasName" class="sub">{{card.setName}}</h4>
			<template v-if="hasCards">
				<div>
					<p>Normals?</p>
					<input min="0" v-model.number="normals" @change="UpdateCard" type="number">
				</div>
				<div>
					<p>Foils?</p>
					<input min="0" v-model.number="foils" @change="UpdateCard" type="number">
				</div>
			</template>
			<div class="btn-div" v-else>
				<p @click="() => {this.$emit('added', this.card)}" title="Add card to your list." class="btn">Add Card</p>
			</div>
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

	foils = this.card.foils
	normals = this.card.normals

	get imageSource() { return `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${this.card.mid}&type=card` }''

	get hasName() { return this.card["setName"] !== null }
	get hasCards() { return this.card["foils"] !== null || this.card["normals"] !== null }

	UpdateCard() {
		this.card.foils = this.foils
		this.card.normals = this.normals
		this.$emit("updated", this.card)
	}
}
</script>

<style lang="stylus" scoped>

	.viewer
		display flex
		flex-wrap wrap
		align-items center
		justify-content space-around
	.sub
		text-align right
		font-style italic
	.rarity, .btn
		padding .5em
		// font-size 1.1em
		text-align center
		margin-bottom .5em
	.rarity
		border-radius .5em
		width fit-content
		margin .25em auto
		font-weight 600
	.Common
		background #121212
		color #fff
	.Uncommon
		background silver
	.Rare
		background gold
	.Mythic
		background orange
	.Special
		background linear-gradient(45deg, hsl(100 20 60), hsl(200 20 60), hsl(250 20 60), hsl(300 20 60) )
		color hsl(200 10 25)
	img, .options
		margin .5em
	img
		margin-right 0
	.options
		margin 1em
		div
			display flex
			align-items center
			justify-content space-between
			margin .5em 0
			p
				flex 0 0 auto
				font-weight 600
			p.btn
				cursor pointer
				flex 1 1 auto
				background hsl(95 50 60)
				font-weight 600
				color hsl(95 50 20)
			input
				flex 0
				width fit-content
				text-align center
				margin-left .5em
				padding .75em
	img
		border-radius 13px
		border-horizontal-spacing 2px
		border-vertical-spacing 2px
</style>