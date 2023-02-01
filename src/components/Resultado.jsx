import styled from "@emotion/styled"

const Resultados = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;


`
const Texto = styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 22px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 150px;

`


const Resultado = ({resultado}) => {
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

  return (
    <Resultados>
        <div>
            <Imagen src={`https://www.cryptocompare.com${IMAGEURL}`} alt="Imagen Criptomoneda" />  
        </div>
        
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día <span>{LOWDAY}</span></Texto>
            <Texto>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
      
    </Resultados>
    
  )
}

export default Resultado