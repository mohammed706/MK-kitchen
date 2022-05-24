import React from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import trash from "../assets/delete.svg";
import "./ResipesList.css";
function RecipesList({ resipes }) {
  if (resipes.length === 0) {
    return <div className="error">No Result to Load ...</div>;
  }
  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };
  return (
    <div className="recipe-list">
      {resipes.map((resipe) => (
        <din className="card" key={resipe.id}>
          <h3>{resipe.title}</h3>
          <p>{resipe.cookingTime}</p>
          <div>{resipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${resipe.id}`}>Cook This</Link>
          <img
            src={trash}
            className="delete"
            onClick={() => handleClick(resipe.id)}
          />
        </din>
      ))}
    </div>
  );
}

export default RecipesList;
