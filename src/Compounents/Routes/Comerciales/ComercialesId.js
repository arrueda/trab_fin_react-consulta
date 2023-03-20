import React, {useEffect, useState} from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

//ItemDetalContainer

const ComercialesId = ({ id }) => {

    const [ comercial, setComercial ] = useState( {} );

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'comercial', id);
        getDoc(itemRef).then((snapshot) => {
            const obj = {
                id: snapshot.id,...snapshot.data(),
            }
            setComercial(obj)
        })
   
    }, [id]);

    return (
    <div>
      <img src={comercial.imagen} alt='Imagen heladera' />
      <p>Titulo: {comercial.title}</p>
      <p>Precio: USD {comercial.price}</p>
      <p>Capacidad: {comercial.capacity} litros</p>
      <p>Stock: {comercial.stock}</p>
    </div>
    );
}


export default ComercialesId;