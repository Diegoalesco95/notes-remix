import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import type { Note } from '~/types/notes.type';

import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { getStoredNotes } from '~/data/notes';

export default function NoteDetailsPage() {
	const note = useLoaderData();

	return (
		<main id='note-details' className='layout'>
			<header>
				<nav>
					<Link to='/notes'>Back to all notes</Link>
				</nav>
			</header>
			<article className='note'>
				<h1 className='note-title'>{note.title}</h1>
				<p className='note-content'>{note.content}</p>
			</article>
		</main>
	);
}

export const loader: LoaderFunction = async ({ params }) => {
	const noteId = params.noteId;

	const notes = await getStoredNotes();
	const selectedNote = notes.find((note: Note) => note.id === noteId);

	if (!selectedNote) {
		throw json(
			{
				message: 'Could not find note for id ' + noteId,
			},
			{ status: 404 },
		);
	}

	return selectedNote;
};

export const meta: MetaFunction = ({ data }) => {
	return {
		title: data.title,
		description: 'Manage your notes easy',
	};
};
