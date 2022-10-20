import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assets/images/Logo.jpg'

const Header = () => {
	return (
		<header>
			<img src={Logo} alt='ООО Рога и Копыта' />
			<nav>
				<ul>
					<Link to='/'>
						<li>Новости</li>
					</Link>
					<Link to='/feedback'>
						<li>Напишите нам</li>
					</Link>
					<Link to='/about'>
						<li>О компании</li>
					</Link>
				</ul>
			</nav>
		</header>
	)
}

export default Header
