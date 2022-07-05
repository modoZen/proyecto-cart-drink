import React, { useEffect, useState } from "react";
const API = process.env.URL || 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const useGetDrinks = ()=>{
    const [state, setState] = useState([]);
    useEffect(()=>{
        async function getDrinks(){
            try {
                const res               = await fetch(API);
                const { drinks }        = await res.json();
                const drinksWithPrice   = drinks.map(drink=>({
                    ...drink,
                    price: parseInt(10*Math.random()) + 1
                }));
                setState(drinksWithPrice);
            } catch (err) {
                console.error(err);
            }
        }
        getDrinks();
    },[])
    return state
}

export { useGetDrinks }
