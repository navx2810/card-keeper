import Vue from 'vue'
// @ is the path to `./src` folder
import App from '@/components/App'
import { BuildConfig, Init } from "@/util"
import Model from "@/model.json"
import Repo from "@/repo"

Model.config = BuildConfig

Init()

new Vue({
	el: '#app',
	render: h => h(App),
	data: Model,
	destroyed() {
		Repo.Close()
	}
})
