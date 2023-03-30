import React from 'react';
import "../styles/Homeslider.css"
import Carousel from 'react-bootstrap/Carousel';

// import "../styles/Footer.css"


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-ClearanceSale.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/UHP-D-clearance-flat70.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P3-FootwearCarnival-RedTapeFila-Flat60.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-MainBanner-P4-Casuals-CampusSutraVeroModa-Min60Extra30.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}



 function Img1(){
    return <>
    <img style={{width:"100%"}}src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FeatureCollection-SectionHeader.jpg" alt="error" />
    <Carousel fade>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P3-ComfortableInnerwearLoungewear-CloviaZivame-Starting199.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P2-MensActivewear-NikeAdidas-3050.jpg"
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P6-TrendsFootprings-HiAttitudePerformax-Starting149.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          classNameName="d-block w-100" id="deevana"
          src="https://assets.ajio.com/cms/AJIO/WEB/21022023-UHP-D-TopBanner-P5-Activewear-PumaPerformax-Min50.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
    <img style={{width:"100%"}}src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HitStyles-Sectionheader.jpg" alt="error" />
    </>
}





export  {CarouselFadeExample};
export   {Img1}




