// src/controllers/hotelController.js

const hotels = [
    { id: 1, name: 'Hotel A', stars: 4 },
    { id: 2, name: 'Hotel B', stars: 3 },
    { id: 3, name: 'Hotel D', stars: 3 },
    { id: 4, name: 'Hotel E', stars: 5 },
    { id: 5, name: 'Hotel F', stars: 2 },
    // Agrega más hoteles aquí
  ];
  
  const getAllHotels = (req, res) => {
    res.json(hotels);
  };
  
  const getHotelsByStars = (req, res) => {
    const filteredHotels = hotels.filter(hotel => hotel.stars === parseInt(req.params.stars));
    res.json(filteredHotels);
  };
  
  module.exports = {
    getAllHotels,
    getHotelsByStars,
  };
  