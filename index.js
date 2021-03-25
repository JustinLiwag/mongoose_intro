const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/tvshowsTwo', { useNewUrlParser: true })
	.then(() => {
		console.log('Connection Open');
	})
	.catch((error) => handleError(error));

const tvSchema = new mongoose.Schema({
	title: String,
	seasons: Number,
	stillOnAir: Boolean,
	cast: Array,
	episodes: Number,
	originalRelease: Number,
});

const Tv = mongoose.model('TvShow', tvSchema);
