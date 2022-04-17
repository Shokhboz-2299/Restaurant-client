import './Admin.scss'
import { useRef } from "react"
import { useQuery, useMutation } from '@apollo/client';

import { createCategory, createRestaurant,createBranches, createMenu } from '../../Query/Query';
import {  CATEGORY, RESTAURANT,BRANCHES,MENU } from '../../Query/Query';

function Admin() {

  // category
  const categoryRef = useRef()
  const [ newCategoryFunc] = useMutation(createCategory,{
    update: (cache, data) => console.log(cache,data)
  })  
  function handleCategory(evt) {
    evt.preventDefault()
    const { category } = evt.target.elements;
    newCategoryFunc({
      variables: {
        name: category.value,
      }
    })  
    categoryRef.current.value =""
  }


  // restaurant
  const { data : category} = useQuery(CATEGORY);

  const restaurantNameRef = useRef()

  const [ newRestaurantFunc] = useMutation(createRestaurant,{
    update: (cache, data) => console.log(cache, data)
  })
  function handleRestaurant(evt) {
    evt.preventDefault()
    
    const { restaurant, categoryId } = evt.target.elements;   
    newRestaurantFunc({
      variables: {
        name: restaurant.value,
        categoryId: categoryId.value
      }
    })  
    restaurantNameRef.current.value =""
  }

  return (

  <div className="admin">
    <div className='container'>
      <div className="admin-wrap">
        <div className='category column'>
        <form  onSubmit={handleCategory}>
            <input  ref={categoryRef} name='category' type="text" placeholder='New category' />
            <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='restaurant column'>
          <form  onSubmit={handleRestaurant}>
            <input  ref={restaurantNameRef} name='restaurant' type="text" placeholder='restaurant name' />
            <select name='categoryId' defaultValue={''}>
              <option value="" disabled>Choose</option>
              {
                category?.category?.length > 0 && category.category.map((e,i) =>(
                  <option value={e.id} key={i}>
                    {e.name}
                  </option>
                ))
              }
            </select>
            <button type='submit'>Submit</button>
          </form>
        </div>
        
      </div>
    </div>
  </div>

  );
}

export default Admin;