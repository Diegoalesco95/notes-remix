import type { MetaFunction } from '@remix-run/node';
import type { ErrorBoundaryComponent } from '@remix-run/react/dist/routeModules';

import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import MainNavigation from '~/components/MainNavigation';

import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<header>
					<MainNavigation />
				</header>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
				<title>An error occurred!</title>
			</head>
			<body>
				<header>
					<MainNavigation />
				</header>
				<main className='error'>
					<h1 className='title'>An error occurred!</h1>
					<p className='text-sm text-center'>{error.message}</p>
					<p>
						Back to{' '}
						<Link to='/' className='text-white'>
							safety
						</Link>{' '}
						!
					</p>
				</main>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
};

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}
