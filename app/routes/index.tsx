import { Link } from '@remix-run/react';

export default function Index() {
	return (
		<main id='content' className='layout'>
			<h1 className='title'>
				A better way of keeping track of your notes
			</h1>
			<p className='text-base'>
				Try our eary beta and never loose track of your notes again!
			</p>
			<Link id='cta' className='button-primary' to='/notes'>
				Try Now!
			</Link>
		</main>
	);
}
