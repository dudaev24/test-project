import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const baseUrl = 'https://retaily.online/api/clientv8';

const Menu = () => {

    const location = useLocation();
    const [token] = useState(location.state.token);

    const [suppliers, setSupplier] = useState([])

    useEffect(() => {
        getSupplier()
    }, [])

    const getSupplier = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: "getsuppliers"
            },
            {
            headers: {
                Authorization: 'Bearer ' + token
            }})
            .then((res) => {
                let suppliers: any = res.data.suppliers
                setSupplier(suppliers)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        
        <div className="Menu_b">
            <div className="Menu_wrapper">
                <span>{token}</span>
                <div>{suppliers.length}</div>
            </div>
        </div>
        );
        
}

export default Menu