import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const baseUrl = 'https://retaily.online/api/clientv8';

const Itemlist = () => {
    const location = useLocation();
    const [token] = useState(location.state.token);
    const [items, setItems] = useState([])

    useEffect(() => {
        getSupp()
    }, [])

    const getSupp = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: ""
            },
            {
            headers: {
                Authorization: 'Bearer ' + token
            }})
            .then((res) => {
                let items: any = res.data.suppliers;
                console.log(res)
                setItems(items);
            })
            .catch((err) => {
                console.log(err)
            });
    }
    return (<div>
        {}
    </div>);
}
export default Itemlist;
