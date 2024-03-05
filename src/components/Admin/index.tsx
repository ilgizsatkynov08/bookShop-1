import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import "./admin.css"
import { useProduct } from '../ProductContext/Context';
import { Link} from 'react-router-dom';

const AdminProduct = () => {
    const { AddProduct } = useProduct();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    

    const handleNameChange = (e:any) => setName(e.target.value);
    const handleImageChange = (e:any) => setImage(e.target.value);
    const handleTypeChange = (e:any) => setType(e.target.value);
    const handlePriceChange = (e:any) => setPrice(e.target.value);
    const handledescriptionChange = (e:any) => setDescription(e.target.value);


    
    function handleSave(id:any) {
        let newObj:any = {
          name: name,
          image: image,
          type: type,
          price: price,
          description:description,

        };
        AddProduct(newObj)
        }
    
    return (
        <div className='container'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70vh"}} className="admin">
                <div className="admin-file">
                    <TextField
                        sx={{marginTop: "1pc", width: "300px", marginLeft: "-3pc", background: "#EEEDED"}}
                        id="outlined-multiline-static"
                        label="URL ..."
                        multiline
                        rows={11.70}
                        onChange={handleImageChange}
                    />
                </div>
                <div className="admin-menu" style={{ display: "flex", gap: "2pc", flexDirection: "column" }}>
                    <TextField
                        sx={{ width: "510px",                       
                         border: "1px solid #010049"
 }}
                        id="outlined-basic"
                        label="Product Name"
                        variant="outlined"
                        onChange={handleNameChange}
                    />
                    <div className="category">
                        <TextField
                            sx={{ width: "230px", marginRight: "3pc",                    
                                 border: "1px solid #010049"
 }}
                            id="outlined-basic"
                            label="Category"
                            variant="outlined"
                            onChange={handleTypeChange}
                        />
                        <TextField
                            sx={{ width: "230px",                     
                               border: "1px solid #010049"
 }}
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                            onChange={handlePriceChange}
                        />
                    </div>
                    <TextField sx={ {
                    border: "1px solid #010049"

                    } }
                        id="outlined-multiline-static"
                        label="Product description..."
                        multiline
                        onChange={handledescriptionChange}
                        rows={4}
                    />
                    <Link to={"/save"}>
                    <Button style={{
                        width: "510px",
                        border: "2px solid #010049"
                    }} variant="outlined" onClick={handleSave}>SAVE</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;
