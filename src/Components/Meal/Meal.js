import React from 'react'
import { Link } from 'react-router-dom';

function Meal(props) {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
  // console.log(props)
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='border rounded-3 p-4'>
        <img src={strMealThumb} className="meal-img" alt="" />
        <h4>{strMeal}</h4>
        <p>{strInstructions.slice(0, 100)}</p>
        <Link to={`/MealDetails/${idMeal}`}>
          <button>Show Details</button>
        </Link>
      </div>
    </div>
  )
}

export default Meal