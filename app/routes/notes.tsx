import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import type { ErrorBoundaryComponent } from '@remix-run/react/dist/routeModules';

import { json, redirect } from '@remix-run/node';
import { Link, useCatch, useLoaderData } from '@remix-run/react';
import { getStoredNotes, storeNotes } from '~/data/notes';

import NewNote from '~/components/NewNote';
import NoteList from '~/components/NoteList';

export default function NotesPage() {
	const notes = useLoaderData();

	return (
		<main id='content' className='layout'>
			<h1 className='title'>My Notes</h1>
			<NewNote />
			<NoteList notes={notes} />
		</main>
	);
}

export const action: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const noteData = Object.fromEntries(formData);

	if (noteData.title.trim().length < 5) {
		return {
			message: 'Invalid title - must be at least 5 characters long',
		};
	}

	const existingNotes = await getStoredNotes();
	noteData.id = new Date().toISOString();

	const updateNotes = existingNotes.concat(noteData);
	await storeNotes(updateNotes);

	return redirect('/notes');
};

export const loader: LoaderFunction = async () => {
	const notes = await getStoredNotes();
	if (!notes) {
		throw json(
			{ message: 'Could Not find any notes' },
			{
				status: 404,
				statusText: 'Not Found',
			},
		);
	}
	return notes;
};

export function CatchBoundary() {
	const caughtResponse = useCatch();

	const message = caughtResponse.data?.message || 'Data not Found';
	const errorCode = caughtResponse.data?.status || '404';

	return (
		<main className='error'>
			<h1 className='title'>{errorCode}</h1>
			<p className='text-sm text-center'>{message}</p>
		</main>
	);
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
	return (
		<main className='error'>
			<h1 className='title'>An error to your notes occurred!</h1>
			<p className='text-sm text-center'>{error.message}</p>
			<p>
				Back to{' '}
				<Link to='/' className='text-white'>
					safety
				</Link>{' '}
				!
			</p>
		</main>
	);
};
