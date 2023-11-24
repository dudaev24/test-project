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
    const [value, setValue] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getSuppliers()
    }, [])

    useEffect(() => {
        getCategories()
    }, [])



    const getProducts = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: "getStories", supplier,
            },
            {headers: {
                Authorization: 'Bearer ' + token}
            })
            .then((res) => {
                let products: any = res.data;
                setProducts (products)
            })
            .catch((err) => {
                console.log(err)
            });
    }

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

    const getCategories = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: "getcategories", supplier
            },
            {
            headers: {
                Authorization: 'Bearer ' + token}
            })
            .then((res) => {
                let categories: any = res.data.suppliers;
                setSuppliers (categories)
            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
            <div className="itemlist_b">
                <div className="shopsNav">
                    {suppliers.filter((supplierCodeCheck : any)  => supplierCodeCheck.code === id['code'])
                            .map ((supplierCode : any) =>  <div key= {supplierCode['code']} className="supplier">
                                <img src={"https://retaily.online/api/repo/" + supplierCode['images'] + "_small"} alt={supplierCode['name']} onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src="https://placekitten.com/g/200/300";
                            }} />{supplierCode['name']}</div>)
                    }
                    
                </div>

            <div className="shoplist-list">
                {products && products.length > 0 ? 
                <div className="shoplist-obj">
                    {
                    products.filter((shopSearch : any)  => shopSearch.name.includes(value) || shopSearch.inn.includes(value))
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
    );
}

export default SapShops;
