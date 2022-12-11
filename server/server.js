require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { cloudinary } = require("./utils/cloudenary");
const app = express();

// express.urlencoded is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/api/test", (req, res) => {
	res.status(200).json({ msg: "success" });
});

app.get("/api/images", async (req, res) => {
	try {
		const { resources } = await cloudinary.search
			.expression("folder:pets")
			.sort_by("public_id", "desc")
			.max_results(30)
			.execute();
		const publicIds = resources.map((file) => file.public_id);
		res.status(200).json(publicIds);
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Something went wrong" });
	}
});

app.post("/api/upload", async (req, res) => {
	try {
		const fileStr = req.body.data;
		// console.log(fileStr);
		const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
			upload_preset: "petfolders",
		});
		// console.log(uploadedResponse);
		// {
		//     asset_id: 'bd3bb6cae13edf228622f373039fdb8a',
		//     public_id: 'pets/nqxrqvsnwblqzgiwdcyw',
		//     version: 1664698724,
		//     version_id: 'c3530e2838703200efe4a3db10b6d3ee',
		//     signature: 'b9895710ed4bff7bd4e5d7d726e208c66f29a26b',
		//     width: 1880,
		//     height: 1251,
		//     format: 'webp',
		//     resource_type: 'image',
		//     created_at: '2022-10-02T08:18:44Z',
		//     tags: [],
		//     pages: 1,
		//     bytes: 119858,
		//     type: 'upload',
		//     etag: '8157dc96ec408eae45338f7c6c1fd158',
		//     placeholder: false,
		//     url: 'http://res.cloudinary.com/ddvn4deym/image/upload/v1664698724/pets/nqxrqvsnwblqzgiwdcyw.webp',
		//     secure_url: 'https://res.cloudinary.com/ddvn4deym/image/upload/v1664698724/pets/nqxrqvsnwblqzgiwdcyw.webp',
		//     folder: 'pets',
		//     access_mode: 'public',
		//     api_key: '911252454183733'
		//   }
		res.json({ msg: "success" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Something went wrong" });
	}
});

// update image
app.post("/api/update", async (req, res) => {
	try {
		// remove image
		const public_id = req.body.public_id;
		const removeResponse = await cloudinary.uploader.destroy(public_id);
		console.log(removeResponse);

		// upload image
		const fileStr = req.body.data;
		const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
			upload_preset: "petfolders",
		});

		console.log(uploadedResponse);

		res.json({ msg: "success" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ msg: "Something went wrong" });
	}
});

app.listen(3003, () => {
	console.log("Server is up on port http://localhost:3003");
});
