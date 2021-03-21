import { Component, useEffect,  } from 'react';
import React, { useState } from 'react';



function Header() {

    
    
  
    const [movies, setMovies] = useState([{ name: 'Power' }]);
    const [newMovie, setNewMovie] = useState("");
    const add = movie => setMovies([...movies, movie]);
    const remove = index => setMovies(
        [...movies.slice(0, index),
        ...movies.slice(index + 1)]
    )
    function htmlDecode(html) {
        return html.replace(/&([a-z]+);/ig, (match, entity) => {
          const entities = { amp: '&', apos: '\'', gt: '>', lt: '<', nbsp: '\xa0', quot: '"' };
          entity = entity.toLowerCase();
          if (entities.hasOwnProperty(entity)) {
            return entities[entity];
          }
          return match;
        });
      }
    useEffect(() => {
        //const { googletag: { cmd } } = window;
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
  
       
        // Feel free to get really paranoid here and check for Array-ness, too.

        // Enqueue a function onto GPT
        // if (cmd) {
        //     cmd.push(() => GPTHasLoaded = true)
        // }
        // window.setTimeout(() => {
        //     DFPManager.getGoogletag().then((googletag) => {
        //         googletag.cmd.push(() => {
        //             googletag.pubads().refresh();
        //         });
        //     });
        // }, 15000);
    })

    const handleAddClick = () => {
        if (newMovie === "") {
            return;
        }
        add({ name: newMovie });
        setNewMovie("");
    };
   
    return (
        <>
            <div >
                {movies.map((value, index) => {
                    return <Movie movie={value} onRemove={() => remove(index)} />;
                })}
            </div>
            {/* <DFPSlotsProvider dfpNetworkId="9999">
                <div className="desktop-ads">
                    <AdSlot sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
                </div>
                <div className="mobile-ads">
                    <AdSlot dfpNetworkId="1999" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
                </div>
            </DFPSlotsProvider>
            <AdUnit /> */}
            
            {/* <GPT
                adUnitPath="/4595/nfl.test.open"
                slotSize={[728, 90]}
            /> */}
            <div className="add-movie">
                <input
                    type="text"
                    value={newMovie}
                    onChange={event => setNewMovie(event.target.value)}
                />
                <button onClick={handleAddClick}>Add movie</button>
            </div>
        </>
    );
}


function Movie({ movie, onRemove }) {
    return (
        <div className="movie">
            <span>{movie.name}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}

export default Header;