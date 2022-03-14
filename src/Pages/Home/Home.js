import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Meal from '../../Components/Meal/Meal';

function Home() {
  
  const [searchText, setSearchText] = useState('')
  const [meals, setMeals] = useState([])
  // console.log(meals)
  useEffect(() => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setMeals(data.meals))

  }, [searchText])


  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  }

  return (
    <>
      <div className='text-center mt-4'>
        <input
          type="text"
          placeholder='search here ...'
          className='w-50 p-3 border rounded'
          onChange={handleSearch}
        />

        <Container>
          { meals.length === 0 ? 
            "loding...."
          :
            <div className='row g-4 mt-4'>
              {
                meals.map(ml => <Meal key={ml.idMeal} meal={ml} ></Meal>)
              }
            </div>
          }
        </Container>
      </div>
    </>
  )
}

export default Home