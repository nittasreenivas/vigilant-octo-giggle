import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Fakestore(){
    const [dog,setDog] = useState([])
    const fetchDogs = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        setDog(data)
    }
    useEffect(() => {
     fetchDogs()
    },[])
    return(
        <div className="doggie-container">
            {
                dog.map((item) => {
                    const {id,image} = item;
                    return(
                        <div key={id} className="doggie">
                            <Link to = {`/projects/fakestore/${id}`}>
                            <img alt="fakestore" src={image} width={250}/>
                            </Link>
                            </div>
                    )
                })
            }
        </div>
    )
}