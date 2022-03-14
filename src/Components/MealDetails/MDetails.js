import React from 'react'

function MDetails(props) {
    
    const mealinfo = props.mdetails;
    console.log(mealinfo)

  return (
    <div className='container'>
        <img src={mealinfo.strMealThumb} style={{width:'100%', height:'500px', objectFit:'cover' }} alt="" />
        <p>country: {mealinfo.strArea}</p>
        <p>Catagory: {mealinfo.strCategory}</p>
        <p>strIngredient list below</p>
        <ul>
           <li>{mealinfo.strIngredient1}</li>
           <li>{mealinfo.strIngredient2}</li>
           <li>{mealinfo.strIngredient3}</li>
           <li>{mealinfo.strIngredient4}</li>
           <li>{mealinfo.strIngredient5}</li>
           <li>{mealinfo.strIngredient6}</li>
           <li>{mealinfo.strIngredient7}</li>
           <li>{mealinfo.strIngredient8}</li>
           <li>{mealinfo.strIngredient9}</li>
           <li>{mealinfo.strIngredient10}</li>
           <li>{mealinfo.strIngredient11}</li>
           <li>{mealinfo.strIngredient12}</li>
           <li>{mealinfo.strIngredient13}</li>
           <li>{mealinfo.strIngredient14}</li>
           <li>{mealinfo.strIngredient15}</li>
           <li>{mealinfo.strIngredient16}</li>
           <li>{mealinfo.strIngredient17}</li>
           <li>{mealinfo.strIngredient18}</li>
           <li>{mealinfo.strIngredient19}</li>
           <li>{mealinfo.strIngredient20}</li>
        </ul>
    </div>
  )
}

export default MDetails