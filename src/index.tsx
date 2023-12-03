import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import appStore from './utils/appStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={appStore}>
      <App />
  </Provider>
)
