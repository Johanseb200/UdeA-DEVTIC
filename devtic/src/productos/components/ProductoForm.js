import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const ProductoForm = ({handleChange, handleClick, formValue}) => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre del Producto</Form.Label>
                <Form.Control type="text" name="title" onChange={handleChange} value={formValue.title} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Descripcion del Producto</Form.Label>
                <Form.Control as="textarea" name="descripcion" style={{ height: "50px"}} onChange={handleChange} value={formValue.descripcion} />                                
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Precio del Producto</Form.Label>
                <Form.Control type="number" name="price" onChange={handleChange} value={formValue.price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check
                    type="checkbox"
                    id="default-checkbox"
                    label="Disponible"
                    name="disponible"
                    value={formValue.disponible || "true"}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                className="float-end"
            >
                Confirmar Producto
            </Button>


        </Form>

    );

};

export default ProductoForm;