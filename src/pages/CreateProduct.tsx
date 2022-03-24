import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import AuthContext from "../utils/auth-context";

const CreateProduct: React.FC = () => {

    const auth = useContext(AuthContext);

    const [productName, setProductName] = useState<string>("");
    const [productCategory, setProductCategory] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [bestProduct, setBestProduct] = useState<string>("");
    const [bestProductBoolean, setBestProductBoolean] = useState<boolean>(false);
    const [file, setFile] = useState();

    const filePickerRef = useRef<HTMLInputElement>(null);

    const changeProductName = (event: any) => {
        setProductName(event.target.value)
    }
    const changeProductCategory = (event: any) => {
        setProductCategory(event.target.value)
    }
    const changedescription = (event: any) => {
        setDescription(event.target.value)
    }
    const chanegprice = (event: any) => {
        setPrice(event.target.value)
    }
    const chanegbestproduct = (event: any) => {
        setBestProduct(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (bestProduct === "true") {
            setBestProductBoolean(true);
        }
        const formData = new FormData();

        formData.append('productName', productName);
        formData.append('productCategory', productCategory);
        formData.append('description', description);
        // @ts-ignore
        formData.append('price', price);
        // @ts-ignore
        formData.append('bestDesplay', bestProductBoolean);
        // @ts-ignore
        formData.append('image', file);
        console.log(formData)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/products/`,
            formData,
            {
                headers: {
                    authorization: "user " + auth.token
                }
            }
        )
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const pickImageHandler = () => {
        if (filePickerRef.current !== null) {
            filePickerRef.current.click();
        }
    };

    const pickedHandler = (event: any) => {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
        }

    }

    return (
        <div style={{ height: "400px" }} >
            <Button onClick={auth.logOut}>
                log out
            </Button>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>productName</label>
                    <input type="text" value={productName} onChange={changeProductName} />
                </div>
                <div>
                    <label>productCategory</label>
                    <input type="text" value={productCategory} onChange={changeProductCategory} />
                </div>
                <div>
                    <label>description</label>
                    <input type="text" value={description} onChange={changedescription} />
                </div>
                <div>
                    <label>price</label>
                    <input type="number" value={price} onChange={chanegprice} />
                </div>
                <div>
                    <label>bestProduct</label>
                    <input type="text" value={bestProduct} onChange={chanegbestproduct} />
                </div>
                <div>
                    <label>image</label>
                    <input type="file"
                        ref={filePickerRef}
                        accept=".jpg,.png,.jpeg"
                        onChange={pickedHandler}
                        style={{ display: 'none' }} />
                    <Button type="button" onClick={pickImageHandler}>
                        PICK IMAGE
                    </Button>
                </div>
                <input type='submit' />
            </form>
        </div>
    );
}


export default CreateProduct;