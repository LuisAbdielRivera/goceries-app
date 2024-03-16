const URL_API='http://groseries-api-8ona.onrender.com'

export const getProducts = () =>{
    const loadProducts = async () => {
        const data = await fetch(URL_API)
        return await data.json()
    }
}