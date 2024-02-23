import ReactDOM from 'react-dom/client'
// import Home from './components/screens/home/Home.jsx'
import './assets/styles/global.sass'
import Router from './components/Router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<Router />
	</AuthProvider>
)
