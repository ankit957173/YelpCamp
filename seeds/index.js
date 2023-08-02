const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database Connected");
});
const sample = array => array[Math.floor(Math.random() * array.lenth)];
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let index = 1; index < 1; index++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 30) + 10;
        const camp = new Campground({
            author: "6353b580f7ba393096fe0ebc",
            location: `${cities[random1000].city} , ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique tempora fuga, unde qui quasi, natus optio harum sint quisquam molestias architecto error iusto ex nobis rem voluptatem quae distinctio.',
            price
        });
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})