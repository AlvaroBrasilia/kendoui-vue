// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import '@progress/kendo-ui'
import { KendoButtonGroup, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { KendoGridColumn, KendoGrid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { KendoDataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.config.productionTip = false
Vue.use(ButtonsInstaller)
Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    KendoButtonGroup,
    KendoGrid,
    KendoGridColumn,
    KendoDataSource
  }
})
