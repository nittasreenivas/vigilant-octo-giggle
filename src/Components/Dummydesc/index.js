import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
export default function Dummydesc(){
    const [prod,setProd] = useState({})
    const {id} = useParams()
    console.log(id)
    // const fetchSingle = async () => {
    //     const response = await fetch(`https://dummyjson.com/products/${id}`)
    //     const data = await response.json()
    //     console.log(data)
    //     setProd(data)
    // }
    useEffect(() => {
        const fetchSingle = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await response.json()
            console.log(data)
            setProd(data)
        }
        fetchSingle()
    },[id])
    return(
        <div className="single-page-container">
            <div key={prod?.id}>
                <h3> {prod?.title} </h3>
                <img alt="single-product-dummy" src={prod?.thumbnail} width={240}/>
                <p> {prod?.description} </p>
                <h4> ${prod?.price}</h4>
            </div>
        </div>
    )
}