import Carousel from 'react-bootstrap/Carousel';

export default function ProSlides() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <img
            className="fixedimg"
            src="img1.png"
            alt="First slide"
          />
          <Carousel.Caption className='shades'>
            <h3>Bauletto mini top handle bag</h3>
            <p>The top handle bag is reimagined in a new duffle style, part of the House's latest collection Exquisite Gucci</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="fixedimg"
            src="img2.png"
            alt="Second slide"
          />
  
          <Carousel.Caption className='shades'>
            <h3>WOMEN'S BALENCIAGA </h3>
            <p>adidas Triple S Trainers in white, black and grey double foam and mesh are done in collaboration with adidas.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="fixedimg"
            src="img3.png"
            alt="Third slide"
          />
  
          <Carousel.Caption className='shades'>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
      
}
