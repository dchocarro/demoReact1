import './Producto.css';
import FechaProducto from './FechaProducto';

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;
    // const ano = props.fecha.getFullYear();
    // const mes = props.fecha.toLocaleString('es-ES', { month: 'long' });
    // const dia = props.fecha.toLocaleString('es-ES', { day: '2-digit' });

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;