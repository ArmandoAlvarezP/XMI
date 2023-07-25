import Carousel from 'react-bootstrap/Carousel';

export const CarouselComp = () => {
  return (
    <Carousel data-bs-theme="dark" style={{ "fontSize": "60px" }}>
      <Carousel.Item interval={3000}>
       <p>Amor</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <p>Fé</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Bondad</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Esperanza</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Honradez</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Pasión</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Protección</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Servicio</p>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
       <p>Calidad</p>
      </Carousel.Item>
    </Carousel>
  )
}
