import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MDetails from './MDetails';

function MealDetails() {
    const [mealDetails, setMealDetails] =useState([{}]);
    const { MealDetailsId } = useParams();
    useEffect(() => {
        const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealDetailsId}`;
        fetch(url)
        .then(res => res.json() )
        .then(data => setMealDetails(data.meals))
    }, [MealDetailsId])

  return (
    <div>
        <h1 className='text-center'>Meal ID is: {MealDetailsId}</h1>
        {
          mealDetails.map(mm => <MDetails mdetails={mm} ></MDetails>)
        }
    </div>
  )
}

export default MealDetails