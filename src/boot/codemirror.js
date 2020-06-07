// require lib
import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'

// Code Mirror
import 'codemirror/addon/edit/continuelist'
import 'codemirror/addon/selection/active-line'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/neat.css'
import 'codemirror/mode/markdown/markdown'

// you can set default global options and events when use
Vue.use(VueCodemirror)
