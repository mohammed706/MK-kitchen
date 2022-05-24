import "./Search.css";

import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "./../../Hooks/useFetch";
import RecipesList from "./../../components/RecipesList";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const { isPending, data, error } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <h5 className="loading">Loading ...</h5>}
      {data && <RecipesList resipes={data} />}
    </div>
  );
}

export default Search;
