import * as React from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

// const round = (n: number, step = 1) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
// const STEP = 1;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 255;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // return `rgba( ${round(pixel.r, STEP)}, ${round(pixel.g, STEP)}, ${round(pixel.b, STEP)}, ${round(pixel.a, 1) / 255})`;
    let gray =  0.257 * pixel.r + 0.504 * pixel.g + 0.098 * pixel.b +  16;
    return `rgb( ${gray}, ${gray}, ${gray})`;
  },
  radius: ({ x, y, image }) => {
    // const pixel = image.get(x, y);
    // const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    // return 3 - (magnitude / 255) * 1.5;
    return 2.0;
  },
  mass: () => 40,
  friction: () => 0.1,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width , canvasDimensions.height );
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 7);
};

export default function ParticleImg() {
  const { innerWidth, innerHeight } = useWindowSize();
  // innerWidth 
  return (
    <div className="particle-image ">
      <ParticleImage
        src={"assets/img/particle.png"}
        // width={Number(innerWidth)}
        // height={Number(innerHeight)}
        scale={1.0}
        entropy={20}
        maxParticles={10000}
        particleOptions={particleOptions}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        backgroundColor="#ffffff"
      />
    </div>
  );
}