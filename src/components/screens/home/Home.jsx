import CarItem from './car-item/CarItem.jsx'
import CreateCardForm from './create-card-form/CreateCardForm.jsx'
import { cars as carsData } from './cars.data.js'
import { useContext, useState } from 'react'
import VideoPlayer from './Player.jsx'
import { AuthContext } from '../../../providers/AuthProvider.jsx'

const Home = () => {
	const [cars, setCars] = useState(carsData)

	// useEffect(() => {
	//     setCars(carsData);
	// }, [cars])

	// const filteredCars = cars.filter(car => car.price > 20000);

	const clearCars = () => {
		setCars([])
	}

	const { user, setUser } = useContext(AuthContext)

	return (
		<div>
			<h1>Cars Catalog</h1>

			{user ? (
				<>
					<h2>Welcome, {user.name}</h2>
					<button onClick={() => setUser(null)}>Logout</button>
				</>
			) : (
				<button
					onClick={() =>
						setUser({
							name: 'Dima',
						})
					}
				>
					Login
				</button>
			)}

			<VideoPlayer src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' />

			<CreateCardForm setCars={setCars} />
			<div>
				{cars.length ? (
					cars.map(car => <CarItem key={car.id} car={car} />)
				) : (
					<p>There is not cars</p>
				)}
			</div>
			<button onClick={clearCars}>Clear</button>
		</div>
	)
}
export default Home
