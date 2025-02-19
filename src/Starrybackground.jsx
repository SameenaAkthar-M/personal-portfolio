import React, { useEffect, useRef } from 'react';

const Starrybackground = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    for (let i = 0; i < 150; i++) {  // Increased stars for a better effect
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        opacity: Math.random(),
        speedX: (Math.random() - 0.5) * 0.5,  // Random horizontal speed
        speedY: (Math.random() - 0.5) * 0.5,  // Random vertical speed
        twinkleSpeed: Math.random() * 0.02 + 0.01 // Opacity change speed
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        // Move stars
        star.x += star.speedX;
        star.y += star.speedY;

        // Twinkle effect
        star.opacity += star.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
        star.opacity = Math.max(0.2, Math.min(1, star.opacity)); // Keep opacity within range

        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw stars
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />;
};

export default Starrybackground;
