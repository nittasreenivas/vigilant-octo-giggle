import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function DummyProd(){
    const [prod,setProd] = useState([])
    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100")
        const {products} = await response.json()
        console.log(products)
        setProd(products)
    }
    useEffect(() => {
        fetchProducts()
    },[])
    return(
        <div className="doggie-container">
           {
            prod.map((item) => {
                const {id,thumbnail} = item
                return(
                    <div key={id} className="doggie">
                        <Link to = {`/projects/dummy/${id}`}>
                        <img alt="products" src={thumbnail} width={250}/>
                        </Link>
                        </div>
                )
            })
           }
        </div>
    )
}


//single product api: https://dummyjson.com/products/1?limit=100