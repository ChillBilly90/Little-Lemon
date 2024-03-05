import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './Specials.css';
import pages from '../../../utils/pages';
import SpecCard from './SpecCard.js';

const SeasonalSpecials = () => {
  const Dishes = [
    {
    	name: 'Greek Salad',
    	image: greekSaladImage,
    	price: '$12.99',
    	description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
      name: 'Bruschetta',
      image: bruschettaImage,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
      name: 'Lemon Dessert',
      image: lemonDessertImage,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];

  return (
    <section className="container grid Seasonal-Specials">
      <div className="Seasonal-Specials-header">
        <h2>Our Seasonal Specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {Dishes.map((Dish, index) =>
        <SpecCard key={index} Dish={Dish} />
      )}
    </section>
  );
};

export default SeasonalSpecials;