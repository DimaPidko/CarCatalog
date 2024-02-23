/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './CreateCardForm.module.sass'

const clearData = {
	name: '',
	price: '',
	image: '',
}

const CreateCardForm = ({ setCars }) => {
	const [data, setData] = useState(clearData)

	const createCar = e => {
		e.preventDefault()

		setCars(prev => [...prev, { id: prev.length, ...data }])

		setData({
			name: '',
			price: '',
			image: '',
		})
	}

	return (
		<form className={styles.form}>
			<h2>Add new car</h2>
			<input
				type='text'
				placeholder='Name'
				onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
				value={data.name}
			/>{' '}
			<br />
			<input
				type='number'
				placeholder='Price'
				onChange={e =>
					setData(prev => ({ ...prev, price: Number(e.target.value) }))
				}
				value={data.price}
			/>{' '}
			<br />
			<input
				type='text'
				placeholder='Image'
				onChange={e => setData(prev => ({ ...prev, image: e.target.value }))}
				value={data.image}
			/>{' '}
			<br />
			<button onClick={e => createCar(e)}>Create</button>
		</form>
	)
}

export default CreateCardForm
