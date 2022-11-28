import { Link } from '@remix-run/react';

export default function Index() {
	return (
		<main id="content" className='layout'>
			<h1 className='title'>A better way of keeping track of your notes</h1>
			<p className='text-base'>Try our eary beta and never loose track of your notes again!</p>
			<p id='cta' className='button-primary'>
				<Link to='/notes'>Try Now!</Link>
			</p>
		</main>
	);
}

