import React from "react";


export default function SlidesList() {

  return (
    <div
      className="slide-list"
    >
<ReactCaroussel
  slidesToShow={3}
  slidesToScroll={3}
  infinite={true}
  autoplay={false}
  speed={2}    // 2s: speed of autoplay
  display={{ 
    arrows: true, 
    dots: true 
  }}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</ReactCaroussel>
    </div>
  );
}