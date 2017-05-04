<template>
	<div id="main">
		<div id="app">
			<navigation :route="route"/>
			<router :route="route"/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Repo from "@/repo"
import Model from "@/model"

import navigation from "@/components/navigation"
import router from "@/components/router"

@Component({
	name: "App",
	props: [],
	components: {navigation, router},
})
export default class extends Vue {
	
	get route() { return Model.route }

}
</script>

<style lang="stylus">
body
	width 100%
	overflow hidden
	height 100vh
*
	margin 0
	padding 0
	font-family "Helvetica"

#main
	position absolute
	top 0
	bottom 0
	left 0
	right 0
	background hsl(200 5 90)
	display flex
	align-items center
	justify-content center

#app
	max-height 100vh
	display flex
	flex-direction column
	color hsl(200 5 30)
	box-sizing border-box
	max-width 35em
	background #fff
	box-shadow 0px 0px 16px 2px rgba(0 0 0 0.15)
	

.content
	flex 1 1 auto
	max-height 100%
	display flex
	flex-direction column

.searchFilter
	flex 0 0 auto

.filter
	display flex
	background hsl(200 5 35)
	color hsl(200 15 10)
	p
		cursor pointer
		flex 1 1 auto
		text-align center
		padding 1em
		font-weight 600
	p.selected
		color #fff
		background hsl(20 50 50)

.search
	display flex
	border-bottom 3px solid hsl(190 50 60)
	input
		font-family "Helvetica"
		flex 1 1 auto
		background hsl(200 20 98)
		text-align center
		font-size 1.2em
		color hsl(200 5 30)
		font-weight 600
		padding .75em
		border none

.cards
	flex 1 1 auto
	box-sizing border-box
	overflow-y scroll

.card
	cursor pointer
	color hsl(200 5 30)
	background #fff
	display flex
	flex-direction column
	width 100%
	.top
		font-weight 600
		flex 0 0 auto
		display flex
		justify-content space-between
		p
			padding .25em .5em
		> div
			display flex
		.fill
			flex 1 1 auto
	.bottom
		flex 1 1 auto
		padding 1em
h3
	font-weight 800
h4
	color hsl(200 10 50)
	margin-left 1em
.count
	cursor pointer
	padding 0 .25em
	background linear-gradient(-45deg, #444, #888)
	color white
.foil
	background linear-gradient(45deg, hsl(100 20 60), hsl(200 20 60), hsl(250 20 60), hsl(300 20 60), hsl(400 20 60) )

.common
	.fill
		border-top 4px solid #121212
	.rarity
		background #121212
		color #fff

.uncommon
	.fill
		border-top 4px solid silver
	.rarity
		background silver

.rare
	.fill
		border-top 4px solid gold
	.rarity
		background gold

.mythic
	.fill
		border-top 4px solid orange
	.rarity
		background orange

.special
	.fill
		// border-top 4px solid linear-gradient(45deg, hsl(100 20 60), hsl(200 20 60), hsl(250 20 60), hsl(300 20 60), hsl(400 20 60) )
		border-top 4px solid hsl(300 20 60)
	.rarity
		background linear-gradient(45deg, hsl(100 20 60), hsl(200 20 60), hsl(250 20 60), hsl(300 20 60) )
		color hsl(200 10 25)


</style>