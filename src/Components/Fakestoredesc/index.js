import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function Fakestoredesc(){
    const [prod,setProd] = useState({})
    const {id} = useParams()
    console.log(id)
    // const fetchSingle = async () => {
    //     const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    //     const data = await response.json()
    //     console.log(data)
    //     setProd(data)
    // }
    useEffect(() => {
        const fetchSingle = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            console.log(data)
            setProd(data)
        }
        fetchSingle()
    },[id])
    return(
        <div className="single-page-contain">
            <div>
                <h3> {prod?.title} </h3>
                <img alt="fakestore" src={prod?.image} width={240}/>
                <p> {prod?.description}</p>
                <h4>${prod?.price} </h4>
            </div>
        </div>
    )
}