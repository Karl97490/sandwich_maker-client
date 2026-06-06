import "../styles/BreadsList.css"
import { useState, useEffect } from "react"
import axios from "axios"

export const BreadsList = () => {
    const [breads, setBreads] = useState([])

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
        <div className="breads-page">
            <h1>This is BreadsList component...</h1>
            {breads.map(bread => {
                return (
                    <h2>Title</h2>
                )
            })}
        </div>
    )
}