import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
const ViewContainer = ({ src, hash }) => {
  const [loadedimg, setloadedimg] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setloadedimg(true);
    };
    img.src = src;
  }, [src]);
  return (
    <div>
      <div style={ { display : loadedimg ? 'none' : 'inline'}}>
        {!loadedimg && (
          <Blurhash
            hash={hash}
            punch={1}
            resolutionX={32}
            resolutionY={32}
            height={300}
            width={480}
            className=" object-cover rounded-md overflow-hidden"
          />
        )}
      </div>
      {loadedimg && (
        <img
          src={src}
          height={300}
          width={480}
          style={ { display : loadedimg ? 'inline' : 'none'}}
          className=" object-cover  rounded-md overflow-hidden"
        />
      )}
    </div>
  );
};

export default ViewContainer;
