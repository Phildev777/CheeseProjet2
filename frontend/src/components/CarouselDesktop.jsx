import "./style/CarouselDesktop.css";

function CarouselDesktop() {
  return (
    <div className="carouselDesktop">
      <div className="contenu-carousel">
        <div className="images-carousel">
          <div className="carouselImg" />
          <div className="carouselImg" />
          <div className="carouselImg" />
          <div className="carouselImg" />
          <div className="carouselImg" />
          <div className="carouselImg" />
        </div>
      </div>
      {/* <div className='controle'>
                <button onClick="carrousel('-')">❮</button>
                <button onClick="carrousel('')">❯</button>
            </div> */}
    </div>
  );
}

export default CarouselDesktop;
