import { useState } from "react"

const CakeForm = ({addNewCake}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCake = {
            cakeName : cakeName,
            ingredients : ingredients.split(', ').map(ingredients => ingredients.trim()),
            price : parseInt(price),
            rating : parseInt(rating)
        };
        addNewCake(newCake);
        setCakeName("");
        setIngredients("");
        setPrice("");
        setRating("");
    };

    return (
        <>
        <h2>Add Cake</h2>

        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            name="cakeName"
            placeholder="Cake Name"
            value={cakeName}
            onChange={(e) => setCakeName(e.target.value)}
            />
            <input 
            type="text"
            name="ingredients"
            placeholder="Ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            />
            <input 
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
            <input 
            type="number"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
            <input 
            type="submit"
            value="Enter"
            />

        </form>
        </>
    );

};

export default CakeForm;