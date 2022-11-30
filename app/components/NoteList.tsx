import type { Notes } from '~/types/notes.type';

function NoteList({ notes }: Notes) {
	return (
		<ul className='flex justify-center gap-4 flex-wrap px-4' id='note-list'>
			{notes.map((note, index) => (
				<li key={note.id} className='note'>
					<article>
						<header>
							<ul className='note-meta'>
								<li>#{index + 1}</li>
								<li>
									<time dateTime={note.id}>
										{new Date(note.id).toLocaleDateString(
											'en-US',
											{
												day: 'numeric',
												month: 'short',
												year: 'numeric',
												hour: '2-digit',
												minute: '2-digit',
											},
										)}
									</time>
								</li>
							</ul>
							<h2 className='note-title'>{note.title}</h2>
						</header>
						<p className='note-content'>{note.content}</p>
					</article>
				</li>
			))}
		</ul>
	);
}

export default NoteList;
