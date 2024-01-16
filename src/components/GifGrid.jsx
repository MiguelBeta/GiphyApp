import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from '../helpers/getGifs';






export const GifGrid = ({ category }) => {

const [ images, setImages ] = useState([]);

const getImages = async() => {
    const newImagenes = await getGifs( category );
    setImages( newImagenes );
}


  useEffect ( () => {
    getImages(category);
  }, [] )



  return (
   <>
        <h3> { category } </h3>

        <div className="card-grid">
          {
            images.map( ({ image } ) => (
              <GifItem 
                  key={ image.id } 
                  title={ image.title }
                  url={ image.url }
                  id={ image.id }
              />
            ))
          }
        
        </div>

   </>
  )
}
