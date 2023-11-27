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
    const [shop] = useState(id['shop']);
    const [suppliers, setSuppliers] = useState ([]);
    const [value, setValue] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories]  = useState<any>([])
    const [selected, setFcat] = useState<any>([]) 

    useEffect(() => {
        getSuppliers()
        getCategories()
    },[])


    const getCategories = async() => {
        axios
            .post(`${baseUrl}`, {
                cmd: "getcategories", supplier, shop
            },
            {
            headers: {
                Authorization: 'Bearer ' + token}
            })
            .then((res) => {
                let categories: any = res.data;
                setCategories (categories)
                setFcat (categories[0].code)
                getProducts(categories[0].code)
            })
            .catch((err) => {
                console.log(err)
            })
            ;
    }

   

    const getProducts = async(code_category: string) => {
        await axios
            .post(`${baseUrl}`, {
                cmd: "getProducts", 
                supplier: supplier, 
                shop: shop, 
                category: code_category
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

    

    return (
            <div className="itemlist_b">
                <div className="menu-collections">
                    {products && products.length > 0 ? 
                        products.map ((filteredProducts : any) =>  <div key= {filteredProducts['code']} className="menu-item">
                        <img src={"https://retaily.online/api/repo/" + filteredProducts['images'] + "_small"} alt={filteredProducts['name']} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://placekitten.com/g/200/300";
                        }} /> <div >{filteredProducts['name']}</div></div>)  
                    : null}</div>
                    </div>
    );
}

export default SapShops;
