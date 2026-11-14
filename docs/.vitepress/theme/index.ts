import DefaultTheme from 'vitepress/theme'
import './style.css'
import PortfolioHome from './PortfolioHome.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PortfolioHome', PortfolioHome)
  }
}
