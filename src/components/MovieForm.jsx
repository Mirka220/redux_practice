import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const MovieForm = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const change = (event) => {
        setQuery(event.target.value);
    }
    const search = () => {
        navigate("/search/" + query);
    }

    return (
        <form>
            <input type="text" value={query} onChange={change}/>
            <button onClick={search}>Поиск</button>
        </form>
    );
};

export default MovieForm;