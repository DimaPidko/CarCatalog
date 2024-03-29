/* eslint-disable react/prop-types */
import { useRef } from 'react'

const VideoPlayer = ({ src, ...props }) => {
	const ref = useRef()
	const handlePlay = () => {
		ref.current.play()
	}
	const handlePause = () => {
		ref.current.pause()
	}
	return (
		<div>
			<button onClick={handlePlay}>Play</button>
			<button onClick={handlePause}>Pause</button>
			<video src={src} ref={ref} {...props}></video>
		</div>
	)
}

export default VideoPlayer
