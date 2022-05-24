import "./Recipe.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

function Recipe() {
  const [resipe, setResipe] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIspending(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIspending(false);
          setResipe(doc.data());
        } else {
          setIspending(false);
          setError("can't find the Recipe");
        }
      });
  }, [id]);
  const handleClick = () => {
    projectFirestore.collection("recipes").doc(id).update({
      title: "Updated title"
    });
  };
  return (
    <div className="recipe">
      {isPending && <div className="loading">Loading ...</div>}
      {error && <div className="error">{error}</div>}
      {resipe && (
        <>
          <h2 className="page-title">{resipe.title}</h2>
          <p> it Takes {resipe.cookingTime} to cook</p>
          <ul>
            {resipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p>{resipe.method}</p>
          {/* <button onClick={handleClick}>Update Me</button> */}
        </>
      )}
    </div>
  );
}

export default Recipe;
