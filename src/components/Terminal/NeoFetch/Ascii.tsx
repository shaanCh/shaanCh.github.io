import { useRef, useState, useEffect } from 'react';
import './Ascii.css';
import {ArtTypeEnum, ImageAscii} from "image-ascii-art";
import faceimg from '../../../assets/Circle_headshot_Cropped.png';
import NeoFetch_info from './NeoFetch_info';

const AsciiArtFace = () => {
  const imgRef = useRef(new Image(100, 100));
  const parentRef = useRef<HTMLElement>(null);
  const [ImageLoaded, setImageLoaded] = useState(false);
  const charsPerLine = 73;
  const charsPerColumn = 69;

  useEffect(() => {
    const img = imgRef.current;
    img.onload = () => setImageLoaded(true);
    img.src = faceimg;
  }, []);
  return (
    <div ref={parentRef as React.RefObject<HTMLDivElement>} id="ascii-container" className="ascii-container">
        {ImageLoaded && (
          <ImageAscii
            image={imgRef.current}
            parentRef={parentRef as React.RefObject<HTMLElement>}
            artType={ArtTypeEnum.ASCII_COLOR_BG_IMAGE}
            charsPerLine={charsPerLine}
            charsPerColumn={charsPerColumn}
            fontColor={'white'}
            backgroundColor={'transparent'}
          />
        )}
        <NeoFetch_info />
    </div>
  )
}

export default AsciiArtFace

