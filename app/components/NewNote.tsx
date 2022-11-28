function NewNote() {
	return (
		<form className='flex bg-slate-300 flex-col p-8 rounded-md gap-4' method="post">
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
				<button className='button-primary'>Add Note</button>
			</div>
		</form>
	);
}

export default NewNote;
