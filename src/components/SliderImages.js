// import './SliderImages.css';

import Carousel from 'react-bootstrap/Carousel';

function SliderImages() {
  return (
    <div>
      <Carousel fade variant='dark'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/016/962/517/original/web-site-development-programming-or-coding-banner-free-vector.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://www.internetcreation.net/wp-content/uploads/2015/04/banner-web-development.png"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/016/962/517/original/web-site-development-programming-or-coding-banner-free-vector.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
