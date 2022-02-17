import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { persistor, store } from './redux/store'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
