import { NavLink } from '@remix-run/react';

function MainNavigation() {
	return (
		<nav id='main-navigation'>
			<ul className='flex w-full items-center justify-center gap-4 my-2'>
				<li className='nav-item'>
					<NavLink to='/'> Home</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/notes'>My Notes</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default MainNavigation;
