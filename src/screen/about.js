import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";


function About() {

    let api = "https://jsonplaceholder.typicode.com/comments"

    const [data, setData] = useState([]);

    let info = () => {
        axios.get(api)
            .then((res) => {
                console.log(res)
                setData([...res.data])
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <Button onClick={info} variant="contained">About Data</Button>
            {
                data.map((e, i) => {
                    return (
                        <div key={i}>
                            <p>{e.name}</p>                    
                        </div>
                    )
                })
            }
        </div>

    )
}

export default About;