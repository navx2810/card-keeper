<template>
	<div :style="customStyle" id="app">
		<header>
			<h3 class="title">Card :: Keeper v{{ version }}</h3>
			<div class="btns">
				<div @click="save" class="btn">Save</div>
				<div @click="changeModal('options')" class="btn">Options</div>
			</div>
		</header>
		<CardList :data="list"/>
		<Modals :data="modals" />
		<Toast v-if="messagesNotEmpty" @done="clear" :secs="5" :messages="messages"/>
	</div>
</template>

<script>
import { Vue, Component } from "vjs"
import Data from "yml-loader!lib/data.yml"
import CardList from "components/card-list"
import Toast from "components/toast"
import Options from "components/options"
import Modals from "components/modals"
import { Save } from "init"

@Component({
	name: "Application",
	components: { CardList, Toast, Options, Modals }
})
export default class extends Vue {

	get modals() { return Data.modals }
	changeModal(route) { Data.modals.route = `/${route}` }

	get customStyle() { return { "font-size": Data.font.size + "pt" } }
	
	get route() { return Data.path }
	get messages() { return Data.messages}
	get list() { return Data.list }

	get messagesNotEmpty() { return Data.messages.length !== 0 }

	clear() { Data.messages = [] }

	boop() { Data.messages.push("Boop!")}

	get version() { return require("package.json").version }

	save() { Save("Data was saved.") }

}
</script>

<style lang="stylus">
body
	background hsl(200 10 10)
	color #fff
	width 100%
	height 100vh
	font-family "Lato", "Helvetica"
*
	padding 0
	margin 0
	text-rendering optimizeLegibility
	font-smoothing antialiased

#app
	display flex
	flex-direction column
	width 100%
	height 100%

.box
	background hsla(200 10 20 .5)
	padding 1em
</style>

<style lang="stylus" scoped>
	header
		flex 0 0 auto
		padding 0 1em
		display flex
		align-items center
		justify-content space-between
	.btns
		display flex
	.btn
		padding 1em
		cursor pointer
</style>