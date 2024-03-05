import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './SpecCard.css';
import pages from '../../../utils/pages';
import Dish from './Specials';
import React from 'react';


const SpecCard = ({ Dish }) => {
  return (
    <article className="SpecCard">
      <div className="SpecCard-image">
        <img src={Dish.image} alt={Dish.name} />
      </div>
      <div className="SpecCard-header">
        <h3>{Dish.name}</h3>
        <span>{Dish.price}</span>
      </div>
      <div className="SpecCard-body-footer">
        <p>{Dish.description}</p>
        <Link to={pages.get('orderOnline').path}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default SpecCard;