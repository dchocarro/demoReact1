
function FechaProducto(props) {

    const ano = props.fecha.getFullYear();
    const mes = props.fecha.toLocaleString('es-ES', { month: 'long' });
    const dia = props.fecha.toLocaleString('es-ES', { day: '2-digit' });

    return (
        <div>
            <div>{dia}</div>
            <div>{mes}</div>
            <div>{ano}</div>
        </div>
    )
}

export default FechaProducto;