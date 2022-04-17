import './Home.scss';

import { useState } from "react"
import { useQuery } from '@apollo/client';
import { CATEGORY,RESTAURANT,BRANCHES, MENU} from '../../Query/Query';

function Home () {
  const [ categoryId, setCategoryId ] = useState(null)
  const [ restaurantId, setRestaurantId ] = useState(null)
  const [ branchId, setBranchId ] = useState(null)
  const [ menuId, setMenuId ] = useState(null)

  const { data : category } = useQuery(CATEGORY);

  const {data : restaurant} = useQuery(RESTAURANT, {
     variables: { categoryId}
  });

  const {data : branches} = useQuery(BRANCHES, {
    variables: { restaurantId}
 });

 const {data : menu} = useQuery(MENU, {
  variables: { branchId}
});


  return (<>
  
  <div className="title mt-3  text-info">
    <i>Categories</i>
    <i>Restaurants</i>
    <i>Branches</i>
    <i>Menu</i>
  </div>
  <div className='card-wrap '>


  <div className="card-list">
      {
      category && category.category.map((e, i) => (
      <div onClick={()=> setCategoryId(e.id)} key={i} className="card" >

        <div className="card-body">
    
          <button href="#" className="btn btn-info mt-3">{e.name}</button>
        </div>
      </div>
      ))
      }
      </div>

    <div className='card-list'>
    {
    restaurant && restaurant.restaurant.map((e, i) => (
    <div onClick={()=> setRestaurantId(e.id)}  key={i} className="card">
     <div className="card-body">
          <button href="#" className="btn btn-info mt-3">{e.name}</button>
        </div>
    </div>
    ))
    }
    </div>

    <div className='card-list'>
    {
    branches && branches.branches.map((e, i) => (
    <div key={i}  onClick={()=> setBranchId(e.id)}  className="card">
      <div className="card-body">
          <button href="#" className="btn btn-info mt-3">{e.name}</button>
        </div>
    </div>
    ))
    }
    </div>

    <div className='card-list'>
    {
    menu && menu.menu.map((e, i) => (
    <div  key={i} className="card">
      <div className="card-body">
      <img src={e.img} alt="" className='card-img '/>
      <p>{e.name}</p>
          <button href="#" className="btn btn-success mb-3">{ e.price } so'm</button>
        </div>
    </div>
    ))
    }
    </div>
  </div>

  </>
    );
}

export default Home;