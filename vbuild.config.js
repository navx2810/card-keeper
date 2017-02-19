const path = require('path')

module.exports = (options, req) => ({
	entry: 'src/index.js',
	dist: 'app/dist',
	
	babel: {
		presets: ["vue-app"],
		plugins: ["transform-decorators-legacy"]
	},
	
	html: {
		title: 'card-keeper'
	},
	postcss: [
	// add more postcss plugins here
	// by default we have autoprefixer pre added
	],
	webpack(cfg) {
		cfg.resolve.modules.push(path.resolve('src'))
		
		if (!options.dev) {
			cfg.output.publicPath = './'
		}
		cfg.target = 'electron-renderer'
		cfg.externals = { level: "level" }
		
		return cfg
	}
})
