import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Doggie(){
    const [dog,setDog] = useState([])
    const fetchDogs = async () => {
        const response = await fetch("https://api.thedogapi.com/v1/breeds")
        const data = await response.json()
        console.log(data.slice(0,50))
        setDog(data.slice(0,50))
    }
    useEffect(() => {
     fetchDogs()
    },[])
    return(
        <div className="doggie-container">
         {
            dog.map((item) => {
                const {id,image:{url},name} = item;
                return(
                    <div key={id} className="doggie">
                        <Link to = {`/projects/doggie/${name}`}>
                        <img alt="doggie" src={url} width={250}/>
                        </Link>
                        </div>
                )
            })
         }
        </div>
    )
}