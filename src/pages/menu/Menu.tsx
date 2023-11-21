import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css';
import React from "react";

const baseUrl = 'https://retaily.online/api/clientv8';

const Menu = () => {
 

    const location = useLocation();
    const [token] = useState(location.state.token);
    const [suppliers, setSupplier] = useState ([]);
    const [tags, setTag] = useState ([]);
    const [menu,setMenu ] = useState (0);

    const all = [0];

    const navigate = useNavigate();
     
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
                let suppliers: any = res.data.suppliers;
                let tags: any = res.data.tags;
                setSupplier(suppliers);
                setTag(tags)
            })
            .catch((err) => {
                console.log(err)
            });
    }
    
    return (
        <div className="Menu_b">
            <div className="navbar_b">
            <div className="nav-menu">
                {
                    tags.map((tag : any)  =>  <span  key= {tag.code} onClick={() => setMenu(tag['code'])} className="li_obj">{tag['name']} {menu === tag['code']? <tr/>: <></> }</span> )
                }
            </div>
            </div>
            <div className="menu-collections">
                {
                    suppliers.filter((supplierTag : any)  => supplierTag.tags.includes(menu))
                    .map ((filteredSupplier : any) =>  <div onClick={() => {navigate ('/item-list', {state:{token}})}} key= {filteredSupplier['code']} className="menu-item">
                        <img src={"https://retaily.online/api/repo/" + filteredSupplier['images'] + "_small"} alt={filteredSupplier['name']} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://placekitten.com/g/200/300";
                    }} /> <span >{filteredSupplier['name']}</span></div>)
                }
            </div>
        </div>

        );
        
}

export default Menu