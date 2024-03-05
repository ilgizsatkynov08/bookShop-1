import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../ProductContext/Context';



interface ProductData {
    name?: string;
    image?: string;
    type?: string;
    price?: number;
    description? : any
}

const EditProduct: React.FC = () => {
    const { getOneProduct, oneProduct, editProduct } = useProduct();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    

    const { id } = useParams<{ id: any }>();

    useEffect(() => {
        getOneProduct(id);
    },[]);

    useEffect(() => {
        if (oneProduct) {
            const { name, image, type, } = oneProduct as ProductData;
            setName(name || "");
            setImage(image || "");
            setType(type || "");
            setPrice(price || 0);
            setDescription(description || "");

        }
    }, [oneProduct]);

    const handleSave = () => {
        const editedObject: any = {
            id: id,
            name: name,
            image: image,
            type: type,
            price: price,
            description:description

        };
        editProduct(Number(id), editedObject);
    }

    const handleNameChange = (e: any) => setName(e.target.value);
    const handleImageChange = (e: any) => setImage(e.target.value);
    const handleTypeChange = (e: any) => setType(e.target.value);
    const handlePriceChange = (e: any) => setPrice(e.target.value);
    const handledescriptionChange = (e:any) => setDescription(e.target.value);


 

    return (
        <div className='container'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70vh" }} className="admin">
                <div className="admin-file">
                    <TextField
                        sx={{ marginTop: "7pc" }}
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        onChange={handleImageChange}
                        value={image}
                    />
                </div>
                <div className="admin-menu" style={{ display: "flex", gap: "2pc", flexDirection: "column" }}>
                    <TextField
                        sx={{ width: "450px" }}
                        id="outlined-basic"
                        label="Product Name"
                        variant="outlined"
                        onChange={handleNameChange}
                        value={name}
                    />
                    <div className="category">
                        <TextField
                            sx={{ width: "200px", marginRight: "3pc" }}
                            id="outlined-basic"
                            label="Category"
                            variant="outlined"
                            onChange={handleTypeChange}
                            value={type}
                        />
                        <TextField
                            sx={{ width: "200px" }}
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                            onChange={handlePriceChange}
                            value={price}
                        />
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Product description..."
                        multiline
                        value={description}
onChange={handledescriptionChange}
                        rows={4}
                    />
                    <Button onClick={handleSave} style={{ width: "500px" }} variant="outlined" >EDIT</Button>
                </div>
            </div>
        </div>
    );
};


export default EditProduct;

