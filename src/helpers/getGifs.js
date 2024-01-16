

export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=I2k0dVee0193nSblVj6Lxo0781ORbVZk&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    
    }));


    return gifs;
}