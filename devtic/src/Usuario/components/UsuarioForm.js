import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UsuarioForm = ({handleChange, handleClick, formValue}) => {
    return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Ingrese su Nombre</Form.Label>
            <Form.Control type="text" name="nombre" onChange={handleChange} value={formValue.nombre} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Ingrese su ID</Form.Label>
            <Form.Control type="text" name="identificacion" onChange={handleChange} value={formValue.identificacion} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Ingrese su correo</Form.Label>
            <Form.Control type="text" name="correo" onChange={handleChange} value={formValue.correo} />
            </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Ingrese su direccion</Form.Label>
            <Form.Control type="text" name="direccion" onChange={handleChange} value={formValue.direccion} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Ingrese el rol que desea ejercer</Form.Label>
            <Form.Control type="text" name="rol" onChange={handleChange} value={formValue.rol} />
        </Form.Group>

        <Button
            onClick={handleClick}
            type="button"
            variant="primary"
            className="float-end"
        >
            Crear Usuario
        </Button>


    </Form>
    );

};

export default UsuarioForm;