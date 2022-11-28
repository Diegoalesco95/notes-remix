import type { ActionFunction, LoaderFunction } from '@remix-run/node';

import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
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

	const existingNotes = await getStoredNotes();
	noteData.id = new Date().toISOString();

	const updateNotes = existingNotes.concat(noteData);
	await storeNotes(updateNotes);

	return redirect('/notes');
};

export const loader: LoaderFunction = async () => {
	const notes = await getStoredNotes();
	return notes;
};
