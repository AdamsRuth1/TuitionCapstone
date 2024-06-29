import React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className="relative overflow-hidden w-full h-auto">
      {inView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto transition-opacity duration-500 ease-in-out ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
          }`}
          style={{
            width: "100%",
            height: "auto",
            filter: loaded ? "none" : "blur(10px)",
            transition: "filter 0.3s ease-in-out, opacity 0.5s ease-in-out",
          }}
        />
      )}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default LazyImage;
