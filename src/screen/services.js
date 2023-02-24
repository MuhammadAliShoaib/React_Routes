import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";


function Services() {

    let api = "https://jsonplaceholder.typicode.com/photos"

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
            <Button onClick={info} variant="contained">Services Data</Button>
            {
                data.map((e, i) => {
                    return (
                        <div key={i}>
                            <p>{e.title}</p>                    
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Services;