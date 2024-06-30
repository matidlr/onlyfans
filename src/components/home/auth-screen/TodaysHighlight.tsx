"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css"

const TodaysHighlight = () => {
	return (
		<div className='w-full md:w-3/4 mx-auto'>
			<CldVideoPlayer width='960' height='540' className='rounded-md' src='highlighted-vid_hsl9o7' />
		</div>
	);
};
export default TodaysHighlight;