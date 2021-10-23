import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const VentaForm = ({handleChange, handleClick, formValue}) => {
    return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Documento del Cliente</Form.Label>
            <Form.Control type="text" name="documento" onChange={handleChange} value={formValue.documento} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Nombre del Cliente</Form.Label>
            <Form.Control type="text" name="cliente" onChange={handleChange} value={formValue.cliente} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Nombre del Vendedor</Form.Label>
            <Form.Control type="text" name="vendedor" onChange={handleChange} value={formValue.vendedor} />
            </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Valor Total de la Venta</Form.Label>
            <Form.Control type="number" name="total" onChange={handleChange} value={formValue.total} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Estado de la Venta</Form.Label>
            <Form.Control type="text" name="estado" onChange={handleChange} value={formValue.estado} />
        </Form.Group>

        

        <Button
            onClick={handleClick}
            type="button"
            variant="primary"
            className="float-end"
        >
            Confirmar Venta
        </Button>


    </Form>
    );

};

export default VentaForm;