
import React from 'react';

    function FecthAPI(){
        const apiGet = () => {
            fetch("https://api.data.gov/ed/collegescorecard/v1/schools?api_key=28Elia3PahggRE0b0ynrGpWnBa5zid436ki7J0iE")
    .then((response)=> response.json())
    .then((json) => console.log(json))
        };
      
        
        
        return (
            <div>
                My API <br/>
                <button> onClick = {apiGet}Fecth API </button>
            </div>
        );
    }
    export default FetchAPI

 