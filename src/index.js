import Vue from 'vue'
import App from 'components/App'
import Data from "yml-loader!lib/data.yml"
import { Initialize } from "init"

Initialize()

new Vue({
	el: '#app',
	data: Data,
	render: h => h(App)
})
