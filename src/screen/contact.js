import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";


function Contact() {

    let api = "https://jsonplaceholder.typicode.com/albums"

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
            <Button onClick={info} variant="contained">Contact Data</Button>
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

export default Contact;