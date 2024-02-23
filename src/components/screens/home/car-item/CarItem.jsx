/* eslint-disable react/prop-types */
import styles from '../Home.module.sass'
import { Link } from 'react-router-dom'

function CarItem({ car }) {
	return (
		<div key={car.id} className={styles.item}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${car.image})`,
				}}
			></div>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<p>{`${car.price} $`}</p>
				<Link to={`/car/${car.id}`} onClick={() => console.log(car)}>
					Read more
				</Link>
			</div>
		</div>
	)
}

export default CarItem
