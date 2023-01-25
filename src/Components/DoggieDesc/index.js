import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function DoggieDesc(){
    const [dog,setDog] = useState({})
    const {name} = useParams()
    console.log('name:',name)
    // const fetchSingleDog = async () => {
    //  const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
    //  const data = await response.json()
    //  console.log(data)
    //  setDog(data)
    // }
    useEffect(() => {
        const fetchSingleDog = async () => {
            const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
            const data = await response.json()
            console.log(data)
            setDog(data[0])
           }
           fetchSingleDog()
    },[name])
    return(
        <div className="single-page-contain">
            <h3> {dog?.name}</h3>
            <img alt="single-dog" src={`https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`} width={350}/>
            <h3> {dog?.origin} </h3>
            <h3> {dog?.life_span} </h3>
            <h4> {dog?.temperament}</h4>
        </div>
    )
}