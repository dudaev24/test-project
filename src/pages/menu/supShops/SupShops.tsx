import { useLocation, useParams } from "react-router-dom";
import './style.css'
import axios from "axios";
import { useState,useEffect } from "react";

const baseUrl = 'https://retaily.online/api/clientv8';

type Props = {
    
}

const SapShops = (props: Props) => {
    const id = useParams ();

    const location = useLocation();
    const [token] = useState(location.state.token);
    const [supplier] = useState(id['code']);
    const [suppliers, setSuppliers] = useState ([]);
    const [value, setValue] = useState([])
    const [shops, setShops] = useState([])

    useEffect(() => {
        getShops()
    }, [])


    const getShops = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: "getShops", supplier,
            },
            {headers: {
                Authorization: 'Bearer ' + token}
            })
            .then((res) => {
                let shops: any = res.data;
                setShops (shops)
            })
            .catch((err) => {
                console.log(err)
            });
    }
    
    useEffect(() => {
        getSuppliers()
    }, [])


    const getSuppliers = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: "getsuppliers"
            },
            {
            headers: {
                Authorization: 'Bearer ' + token}
            })
            .then((res) => {
                let suppliers: any = res.data.suppliers;
                setSuppliers (suppliers)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <div className="shoplist">
            <div className="shoplist_b">
                <div className="shopsNav">
                    {suppliers.filter((supplierCodeCheck : any)  => supplierCodeCheck.code === id['code'])
                            .map ((supplierCode : any) =>  <div key= {supplierCode['code']} className="supplier">
                                <img src={"https://retaily.online/api/repo/" + supplierCode['images'] + "_small"} alt={supplierCode['name']} onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://placekitten.com/g/200/300";
                            }} />{supplierCode['name']}</div>)
                    }
                    
                </div>
                <div className="Search-div">
                    <input type="text" className='Search-bar' placeholder="Поиск" value={value} onChange={(e: any) => {setValue(e.target.value);}}/>
                </div>
            <div className="shoplist-list">
                {shops && shops.length > 0 ? 
                <div className="shoplist-obj">
                    {
                    shops.filter((shopSearch : any)  => shopSearch.name.includes(value) || shopSearch.inn.includes(value))
                        .map((shops : any) => {
                            return (
                                <div className="shops-obj">
                                    <div>{shops.name}</div>
                                    <div>ИНН: {shops.inn}</div>
                                </div>
                            )
                        }
                     )}
                </div>
                : null}</div>
                </div>
        </div>
    );
}

export default SapShops;
