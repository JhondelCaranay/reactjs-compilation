import axios from "axios";
import { useEffect, useState } from "react";

import {
	AdvancedImage,
	lazyload,
	responsive,
	accessibility,
	placeholder,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const myCld = new Cloudinary({
	cloud: {
		cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
	},
});

export default function Home() {
	const [imageIds, setImageIds] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const res = await axios.get("/api/images");
			setImageIds(res.data);
			console.log(res.data);
		};
		fetchImages();
	}, []);

	return (
		<div>
			<h1 className="title">Cloudinary Gallery</h1>
			{/* <div className="gallery">
				{imageIds &&
					imageIds.map((imageId, index) => (
						<Image
							key={index}
							cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
							publicId={imageId}
							width="300"
							crop="scale"
						/>
					))}
			</div> */}
			<div className="gallery">
				{imageIds &&
					imageIds.map((imageId, index) => (
						<AdvancedImage
							key={index}
							cldImg={myCld.image(imageId)}
							plugins={[
								lazyload(),
								responsive(),
								// accessibility(),
								placeholder(),
							]}
							width="300"
							// crop="scale"
						/>
					))}
			</div>
		</div>
	);
}

// Plugins
// The Cloudinary React library provides plugins to render the media on your site in the most optimal way and improve your user's experience:
// Lazy Loading to delay loading images if they are not yet visible on the screen.
// Responsive images to resize your images automatically based on the viewport size.
// Image accessibility to make your images more accessible to your users with visual disabilities.
// Image placeholders to display a lightweight version of an image while the target image is downloading.
