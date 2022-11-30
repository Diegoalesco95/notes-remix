import { Form, useActionData, useTransition } from '@remix-run/react';

function NewNote() {
	const data = useActionData();
	const transition = useTransition();

	const isSubmitting = transition.state === 'submitting';

	return (
		<Form
			className='flex bg-slate-300 flex-col p-8 rounded-md gap-4'
			method='post'
			id='note-form'>
			{data?.message && <p className='text-error'>{data.message}</p>}
			<p className='flex flex-col items-center'>
				<label className='text-lg font-semibold' htmlFor='title'>
					Title
				</label>
				<input id='title' name='title' type='text' required />
			</p>
			<p className='flex flex-col items-center'>
				<label className='text-lg font-semibold' htmlFor='content'>
					Content
				</label>
				<textarea
					className='resize'
					id='content'
					name='content'
					rows={5}
					cols={50}
					required
				/>
			</p>

			<div className='w-full flex'>
				<button disabled={isSubmitting} className='button-primary'>
					{isSubmitting ? 'Adding...' : 'Add Note'}
				</button>
			</div>
		</Form>
	);
}

export default NewNote;
