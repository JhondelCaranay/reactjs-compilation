import { useState } from "react";
import axios from "axios";
const Upload = () => {
	const [fileInput, setfileInput] = useState("");
	const [previewSource, setpreviewSource] = useState("");
	// const [selectedFile, setselectedFile] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleFileInputChange = (e) => {
		// select the first file
		const file = e.target.files[0];
		// check if file is image
		if (file && file.type.substr(0, 5) === "image") {
			// setselectedFile(file);
			previewFile(file);
			setErrorMsg("");
			// setfileInput(e.target.value);
		} else {
			// setselectedFile("");
			// setfileInput("");
			setpreviewSource("");
			setErrorMsg("Please select an image file (png or jpg)");
		}
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setpreviewSource(reader.result);
		};
	};

	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!previewSource) return;
		// const reader = new FileReader();
		// reader.readAsDataURL(selectedFile);
		upLoadImage(previewSource);
	};

	const upLoadImage = async (base64EncodedImage) => {
		try {
			console.log(base64EncodedImage);
			// await axios.post("/api/upload", {
			// 	data: base64EncodedImage,
			// });
			// test vite proxy
			// const res = await axios.post("api/test");
			// console.log(res);

			setpreviewSource("");
		} catch (error) {
			console.error(error);
		}
	};

	const canSubmitFile = Boolean(previewSource);

	return (
		<div>
			<h1 className="title">Upload an Image</h1>
			<form onSubmit={handleSubmitFile} className="form">
				<label htmlFor="fileInput">
					<img
						src="https://www.pngkey.com/png/full/207-2079264_download-placeholder-icon-svg.png"
						alt=""
						width="100"
						className="upload-image"
					/>
				</label>
				{errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
				<input
					id="fileInput"
					type="file"
					name="image"
					onChange={handleFileInputChange}
					value={fileInput}
					className="form-input file-upload"
					accept="image/*"
				/>
				<br />
				<button className="btn" type="submit" disabled={!canSubmitFile}>
					Submit
				</button>
			</form>
			{previewSource && (
				<img src={previewSource} alt="chosen" style={{ height: "300px" }} />
			)}
		</div>
	);
};
export default Upload;
