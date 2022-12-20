import "./App.css";
import { useEffect, useState } from "react";
import { storage } from "./config/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [previewSource, setPreviewSource] = useState<string | ArrayBuffer | null>("");
	const [imageUpload, setimageUpload] = useState<File | null>(null);
	const [imageURL, setimageURL] = useState<string | null>(null);
	const [imageList, setimageList] = useState<string[]>([]);

	const imageListRef = ref(storage, "spedi/image/");

	const previewFile = (file: File) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const onUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const file = e.target.files[0];
		previewFile(file);
		setimageUpload(file);
	};

	const uploadImage = async () => {
		if (!imageUpload) return;
		console.log({ imageUpload });
		console.log({ previewSource });

		const storageRef = ref(storage, `spedi/image/${imageUpload.name + v4()}`);
		console.log({ storageRef });

		try {
			const snapshot = await uploadBytes(storageRef, imageUpload);

			const url = await getDownloadURL(snapshot.ref);
			console.log({ url });
			setimageURL(url);

			// set to imageList
			setimageList((prev) => [...prev, url]);

			toast.success("Image uploaded successfully");
		} catch (error) {
			console.log(error);
			toast.error("Image upload failed");
		}
	};

	useEffect(() => {
		const getImageList = async () => {
			const images = await listAll(imageListRef);
			console.log({ images });

			const imageList = await Promise.all(
				images.items.map(async (imageRef) => {
					const url = await getDownloadURL(imageRef);
					return url;
				})
			);

			setimageList(imageList);
		};
		getImageList();
	}, []);

	console.log({ imageList });
	console.log({ imageURL });

	return (
		<div className="App">
			<ToastContainer />

			<h1>firebase upload image</h1>

			<input type="file" onChange={onUploadChange} />
			<button onClick={uploadImage}>Upload image</button>

			<h1>PREVIEW</h1>
			<div className="prev">
				{previewSource && (
					<img src={previewSource as string} alt="chosen" style={{ height: "300px" }} />
				)}
			</div>

			<h1>GET IMAGE BY URL</h1>
			<div className="detail">
				{imageURL && <img src={imageURL} alt="chosen" style={{ height: "300px" }} />}
			</div>

			<h1>IMAGE LIST</h1>
			<div className="list">
				{imageList.map((image) => (
					<img
						src={image}
						alt="image"
						style={{ height: "300px" }}
						key={image}
						className=""
					/>
				))}
			</div>
		</div>
	);
}

export default App;
