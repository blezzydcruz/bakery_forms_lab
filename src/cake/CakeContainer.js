import { useState } from "react";
import Cake from "./Cake.js";
import CakeForm from "./CakeForm.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	);

	const addNewCake = (newCake) => {
		const updatedCakes = [...listOfCakes, newCake]
		setListOfCakes(updatedCakes)
	}

  return (
    <>
		{listOfCakes.map(cake => (
			<Cake 
				cakeName = {cake.cakeName}
				ingredients = {cake.ingredients}
				price = {cake.price}
				rating = {cake.rating}
			/>
		))}

		<CakeForm cake={listOfCakes} addNewCake={addNewCake}/>
        
    </>
  )
}

export default CakeContainer;