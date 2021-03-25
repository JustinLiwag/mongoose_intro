const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/ourstoretwo', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connection Open');
	})
	.catch((error) => handleError(error));

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxLength: 20,
	},
	price: {
		type: Number,
		min: [0, 'This need to be a non negative number'],
	},
	onSale: {
		type: Boolean,
		default: false,
	},
	category: [String],
});

productSchema.methods.message = () => {
	console.log(this);
};

const Product = mongoose.model('Product', productSchema);

const shoe = new Product({
	name: 'Birkenstock w/ socks',
	price: 1000,
	category: ['Birkenstock', 'Mark', 'Dad Energy'],
});

// shoe
// 	.save()
// 	.then((data) => {
// 		console.log('IT WORKED!');
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('---ERROR---');
// 		console.log(err);
// 	});

// Product.findOneAndUpdate(
// 	{ name: 'Birkenstock w/ socks' },
// 	{
// 		price: 1000,
// 	}
// )
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));
