// ** style
import "./Create.css";
import React, { useState, useRef } from "react";
import { projectFirestore } from "../../firebase/config";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newingredient, setNewingredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const history = useHistory();
  const ingredientInput = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      method,
      cookingTime: cookingTime + "minutes",
      ingredients
    };
    try {
      await projectFirestore.collection("recipes").add(doc);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newingredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredient) => [...prevIngredient, ing]);
    }
    setNewingredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title"> Add a New Recipe</h2>

      <form onSubmit={handelSubmit}>
        <label>
          <span>Recipe Title :</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Recipe Ingredients : </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewingredient(e.target.value)}
              value={newingredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Ingredients :{" "}
          {ingredients.map((int) => (
            <span>{int},</span>
          ))}
        </p>
        <label>
          <span>Recipe Method :</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Recipe Cooking Time : </span>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Create;
