import { useState } from "react";
import { Addcategory } from "./components/AddCategory";


export const GifExpertApp = () => {


    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = (newCategory) => {
        
        setCategories( [newCategory, ...categories] ); //Se desestructura categories y se grega valorant
    }

    //console.log(categories);

    return (
        
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <Addcategory onNewCategory={ (value) => onAddCategory(value) } /> 

            {/* Listado de Gif */}

            <ol>
                { categories.map( category => {
                    return <li key={ category }> {category}  </li>
                    }) 
                }
            </ol>
             
                {/* Gif Item */}
        </>
        
        );
}

