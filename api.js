const URL_API='https://groceries-api-45ll.onrender.com/'

export const getProducts = () =>{
    const loadProducts = async () => {
        const data = await fetch(URL_API)
        return await data.json()
    }
}