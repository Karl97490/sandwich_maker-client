import "../styles/SandwichesList.css"
import { useState, useEffect } from "react"
import axios from "axios"

export const SandwichesList = () => {
    const [sandwiches, setSandwiches] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sandwiches-page">
            <h1>This is SandwichesList component...</h1>
            {sandwiches.map(sandwich => {
                return(
                    <h2>Title</h2>
                )
            })}
        </div>
    )
}