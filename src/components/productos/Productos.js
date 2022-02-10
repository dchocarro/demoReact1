import Producto from './Producto';

function Productos(props) {
    return (
        <div>
            <Producto
                nombre={props.productos[0].nombre}
                precio={props.productos[0].precio}
                fecha={props.productos[0].fecha}
            />
            <Producto
                nombre={props.productos[1].nombre}
                precio={props.productos[1].precio}
                fecha={props.productos[1].fecha}
            />
            <Producto
                nombre={props.productos[2].nombre}
                precio={props.productos[2].precio}
                fecha={props.productos[2].fecha}
            />
        </div>
    )
}

export default Productos;