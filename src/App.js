import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Header from './components/Header'
import News from './components/News'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<News />} />
				<Route path='/about' element={<About />} />
				<Route path='/feedback' element={<Feedback />} />
			</Routes>
			<Footer />/
		</>
	)
}

export default App
