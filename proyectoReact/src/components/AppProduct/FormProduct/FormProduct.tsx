import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForms"
import { FC } from "react";

interface IpropsFormProduct{
    handleAddProduct: Function;
}

export const FormProduct :FC<IpropsFormProduct>= ({handleAddProduct}) => {
const {handleChange, values, resetForm} = useForm(
    {
        nombre:'',
        imagen:'',
        precio:0 
    });

    const handleSubmitForm =()=>{
        handleAddProduct(values)
        resetForm();
    };

    return (
    <Form className ="p-4 border rounded m-3">
        <Form.Group controlId= "formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingrese nombre producto"
            value={values.nombre}
            onChange={handleChange}
            />
        </Form.Group>
    <Form.Group controlId= "formNombre">
        <Form.Label>imagen</Form.Label>
        <Form.Control
            type="text"
            name="imagen"
            placeholder="Ingrese imagen del producto"
            value={values.imagen}
            onChange={handleChange}
            />
    </Form.Group>
    <Form.Group controlId= "formNombre">
        <Form.Label>precio</Form.Label>
        <Form.Control
            type="number"
            name="precio"
            placeholder="Ingrese precio del producto"
            value={values.precio}
            onChange={handleChange}
            />
    </Form.Group>
    <div className="d-flex justifyy-content-center mt-4">
        <Button onClick={handleSubmitForm} variant="primary">Enviar Producto</Button>
        </div>
        </Form>
);
};
