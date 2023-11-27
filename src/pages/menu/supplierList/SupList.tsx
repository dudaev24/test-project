import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css';

const baseUrl = 'https://retaily.online/api/clientv8';

const SupList = () => {
    
    const location = useLocation();
    const [token] = useState(location.state.token);
    const [suppliers, setSupplier] = useState ([]);
    const [tags, setTag] = useState ([]);
    const [menu,setMenu ] = useState (0);

   

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
                    <span onClick={() => setMenu(0)} className={"li_tag"}>Все {menu === 0? <></> : <></> } </span>
                    {
                        tags.map((tag : any)  =>  <span  key= {tag.code} onClick={() => setMenu(tag['code'])} className="li_tag">{tag['name']} {menu === tag['code']? <div className="active"/>: <></> }</span> )
                    }
                </div>
            </div>
                <div className="menu-collections">
                {      
                    menu === 0? 
                    suppliers.map ((filteredSupplier : any) =>  <div onClick={() => {navigate (`/sapShops/${filteredSupplier.code} `, {state:{filteredSupplier, token}})}} key= {filteredSupplier['code']} className="menu-item">
                    <img src={"https://retaily.online/api/repo/" + filteredSupplier['images'] + "_small"} alt={filteredSupplier['name']} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="https://placekitten.com/g/200/300";
                    }} /> <div >{filteredSupplier['name']}</div></div>)  
                    :
                    suppliers.filter((supplierTag : any)  => supplierTag.tags.includes(menu))
                    .map ((filteredSupplier : any) =>  <div onClick={() => {navigate (`/sapShops/${filteredSupplier.code}`, {state:{token}})}} key= {filteredSupplier['code']} className="menu-item">
                        <img src={"https://retaily.online/api/repo/" + filteredSupplier['images'] + "_small"} alt={filteredSupplier['name']} onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src="https://placekitten.com/g/200/300";
                    }} /> <div>{filteredSupplier['name']}</div></div>) 
                }
            </div>
        </div>
        );
        
}

export default SupList