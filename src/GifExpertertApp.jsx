import { useState } from "react";
import { Addcategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {


    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = (newCategory) => {
        
    
        if (categories.includes(newCategory) ) return;
            setCategories( [newCategory, ...categories] ); //Se desestructura categories y se grega valorant
    }

    //console.log(categories);

    return (
        
        <>
        <h1>GifExpertApp</h1>

        <Addcategory 
            onNewCategory={ (value) => onAddCategory(value) } 
        /> 
        
            { categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }/>     
                    ))
                }
        </>
        
        )
        
}

