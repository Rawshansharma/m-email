import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate
import { store, persistor } from './redux/Store.js'; // Import the store and persistor


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    {/* PersistGate delays rendering until rehydration is complete */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </StrictMode>,
)
