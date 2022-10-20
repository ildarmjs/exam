import { useCustomHook } from '../hooks/customHooks'

const Feedback = () => {
	const {
		error,
		submitHandler,
		value,
		value2,
		changeHandler,
		changeHandler2,
		changeHandler3,
		checked,
		array,
		clickHandler,
	} = useCustomHook()
	return (
		<main>
			<h1>Написать отзыв</h1>
			{error && <p className='error'>{error}</p>}
			<form onSubmit={submitHandler} className='feedback-form'>
				<ul>
					<li>
						<label>
							Ваше Имя:{' '}
							<input
								value={value}
								onChange={changeHandler}
								name='name'
								type='text'
								placeholder='Отец Русской Демократии'
							/>
						</label>
					</li>
					<li>
						<label>
							Отзыв:
							<br />{' '}
							<textarea
								value={value2}
								onChange={changeHandler2}
								name='feedback'
							></textarea>
						</label>
					</li>
					<li>
						<label>
							<input
								value={checked}
								onChange={changeHandler3}
								name='warranty'
								type='checkbox'
							/>{' '}
							Хочу гарантию возврата средств за 10% доли в предприятии
						</label>
					</li>
					<li>
						<button onClick={clickHandler}> Оставить отзыв</button>
					</li>
				</ul>
			</form>
			{array.map(arr => {
				return (
					<div>
						<div className='post'>
							<h3>{arr.name}</h3>
							<p>{arr.text}</p>
						</div>
					</div>
				)
			})}
		</main>
	)
}

export default Feedback
