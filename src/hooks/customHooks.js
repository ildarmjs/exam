import { useState } from 'react'

export const useCustomHook = () => {
	const [value, setValue] = useState('')
	const [value2, setValue2] = useState('')
	const [checked, setChecked] = useState(false)
	const [error, setError] = useState('')
	const [array, setArray] = useState([
		{
			name: 'Ильдар',
			text: 'Все супер, товар пришел',
			check: true,
		},
	])

	const clickHandler = () => {
		setError('')

		if (
			value.trim().length === 0 ||
			value2.trim().length === 0 ||
			checked === false
		) {
			setError('Не все поля формы заполнены')
			return
		}
		const newPost = {
			name: value,
			text: value2,
			check: checked,
		}
		setArray([newPost, ...array])
	}

	const submitHandler = event => {
		event.preventDefault()
		setError('')

		if (
			value.trim().length === 0 ||
			value2.trim().length === 0 ||
			checked === false
		) {
			setError('Не все поля формы заполнены')
			return
		}
	}
	const changeHandler = event => {
		setValue(event.target.value)
		console.log(event.target.value)
	}

	const changeHandler2 = event => {
		setValue2(event.target.value)
		console.log(event.target.value)
	}
	const changeHandler3 = () => {
		setChecked(!checked)
		console.log(checked)
	}

	return {
		error,
		submitHandler,
		value,
		value2,
		changeHandler,
		changeHandler2,
		changeHandler3,
		clickHandler,
		checked,
		array,
	}
}
