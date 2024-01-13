import { useState } from "react";


export const Addcategory = ({ onNewCategory }) => {


const [inputValue, setInputValue] = useState('');

const onInputChange = ( target ) => {
    setInputValue(event.target.value);
}

const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return; 

    // setCategories( categories => [inputValue, ...categories ]);
    setInputValue('');
    onNewCategory( inputValue.trim() );
    
}


  return (
    <form onSubmit= {onSubmit} > 
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />

    </form>
    
  )
}
