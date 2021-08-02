import {Carousel, Button} from 'react-bootstrap';
import '../HomeContainer/HomeContainer.css'
import '../../index.css';



export function HomeContainer() {

  return (
    <>
      <Carousel prevLabel='' nextLabel=''>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="././images/escritorio.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3 className="title-pic">¡Bienvenido!</h3>
            <p className="subtitle-pic">Vea los excelentes productos al mejor precio en las siguientes slide!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="././images/auriculares.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="title-pic">Auriculares</h3>
            <p className="subtitle-pic">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className ='btnHome' href='/category/auriculares'>¡Necesito unos!</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="././images/teclado.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="title-pic">Mouse y Teclados</h3>
            <p className="subtitle-pic">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Button className ='btnHome' href='/category/mouseyteclados'>¡Lo que buscaba!</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="././images/pets.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="title-pic">¿Los perros?</h3>
            <p className="subtitle-pic">Los perros están solo por lindos.</p>
            <Button className ='btnHome' href='https://www.google.com/search?q=perros+felices&sxsrf=ALeKk012oJC2VqnvYO_U0TVEBagLN_SFdw:1627917433852&source=lnms&tbm=isch&sa=X&ved=2ahUKEwivrviC0ZLyAhU0ppUCHVhrA84Q_AUoAXoECAIQAw&biw=1920&bih=969'>Más perritos</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>

  )
}