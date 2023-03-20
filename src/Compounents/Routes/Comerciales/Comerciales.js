import React, {useEffect, useState} from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import clikComercialId from './clikComercialId'


// PostListContainer

const Comerciales = () => {

  const [ items, setItems ] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemCollections = collection(db, 'comercial');

    getDocs(itemCollections).then((snapshotList) =>{
      const docs = snapshotList.docs.map(snapshot =>({
        id: snapshot.id,...snapshot.data(),
      }));
      setItems(docs);
    })
  }, [])

    return (
      <div onClick={clikComercialId}>
        {items.map((item) => (
        <div>
          <img src={item.imagen} alt='Imagen heladera' />
          <p>Titulo: {item.title}</p>
          <p>Precio: {item.price}</p>
        </div>
        ))}
      </div>
    );
}


export default Comerciales;