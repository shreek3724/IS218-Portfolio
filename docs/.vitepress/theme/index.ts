import DefaultTheme from 'vitepress/theme'
import './style.css'
import ContactPage from './ContactPage.vue'
import PortfolioHome from './PortfolioHome.vue'
import ProjectsPage from './ProjectsPage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ContactPage', ContactPage)
    app.component('PortfolioHome', PortfolioHome)
    app.component('ProjectsPage', ProjectsPage)
  }
}
