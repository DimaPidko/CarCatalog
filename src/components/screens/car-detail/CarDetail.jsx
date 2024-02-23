import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CarItem from '../home/car-item/CarItem'
import { cars as carsData } from '../home/cars.data.js'

const CarDetail = () => {
	const { id } = useParams()
	const [car, setCar] = useState([])

	useEffect(() => {
		if (!id) return

		const data = carsData[id]

		setCar(data)
	}, [id])

	return (
		<div>
			<Link to='/' onClick={() => console.log(car)}>
				Back
			</Link>
			<CarItem key={id} car={car} />
		</div>
	)
}

export default CarDetail
