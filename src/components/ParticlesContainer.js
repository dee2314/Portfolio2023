import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
    className="w-[92%] h-[35%] absolute translate-z-0 md:w-[80%] md:h-[30%] lg:w-[70%] lg:h-[25%]"
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#8C52FE",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions:{
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
                enable: true,
                area: 400
            },
            value: 80
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'square'
          },
          size: {
            value: {min: 1, max: 5}
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
