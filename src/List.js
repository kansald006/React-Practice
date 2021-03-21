import { Component, useEffect, } from 'react';
import React, { useState } from 'react';

function List() {
    const [movie, setMovie] = useState([{ name: 'Marvel' }]),
    const [newMovie, setNewMovie] = useState("")
    const add = movie => setMovie([...movie, movie])
    const remove = index => setMovie([...movies.slice(0, index), ...movies.slice(index + 1)])
    handleadd = () => {
        if (newMovie === "") {
            return;
        }
        add({ name: newMovie });
        setNewMovie("");
    }

    return (

        <>
            <div >
                {movie.map((value, index) => {
                    return <Movie movie={value} onRemove={() => remove(index)} />;
                })}
            </div>
            <div className="add-movie">
                <input type="text" value={newMovie} onChange={event => setNewMovie(event.target.value)} />
                <button onClick={handleadd}></button>
            </div>
        </>
    )




}
function Movie({ movie, onRemove }) {
    return (
        <div className="movie">
            <span>{movie.name}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}
export default  List;