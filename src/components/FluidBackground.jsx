import { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL Fluid Simulation
    // Configured to look vibrant, glowing, and elegant on light backgrounds
    WebGLFluid(canvas, {
      IMMEDIATE: false,
      TRIGGER: 'hover',
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 2.5, // Faster fade-out for a minimal, clean effect
      VELOCITY_DISSIPATION: 1.5, // Faster deceleration of fluid movements
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 15, // Lower turbulence for smooth, elegant laminar flows
      SPLAT_RADIUS: 0.2, // Smaller splat size for subtle cursor trails
      SPLAT_FORCE: 3000, // Reduced force for gentler movement
      SHADING: false, // Clean, flat watercolor paint appearance
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 4, // Slower, calmer color transitions
      PAUSED: false,
      BACK_COLOR: { r: 255, g: 255, b: 255 },
      TRANSPARENT: true,
      BLOOM: false, // Turn off bloom glow for clean minimalist light theme
      SUNRAYS: false, // Turn off sunrays to fit light theme simplicity
    });

    // Forward mouse events from window to the transparent canvas
    const handleMouseMove = (event) => {
      if (!event.isTrusted) return;
      const offsetX = event.clientX;
      const offsetY = event.clientY;

      const newEvent = new MouseEvent(event.type, {
        clientX: event.clientX,
        clientY: event.clientY,
        screenX: event.screenX,
        screenY: event.screenY,
        buttons: event.buttons,
        bubbles: false,
        cancelable: true,
      });

      Object.defineProperty(newEvent, 'offsetX', { get: () => offsetX });
      Object.defineProperty(newEvent, 'offsetY', { get: () => offsetY });

      canvas.dispatchEvent(newEvent);
    };

    const handleMouseDown = (event) => {
      if (!event.isTrusted) return;
      const offsetX = event.clientX;
      const offsetY = event.clientY;

      const newEvent = new MouseEvent(event.type, {
        clientX: event.clientX,
        clientY: event.clientY,
        screenX: event.screenX,
        screenY: event.screenY,
        buttons: event.buttons,
        bubbles: false,
        cancelable: true,
      });

      Object.defineProperty(newEvent, 'offsetX', { get: () => offsetX });
      Object.defineProperty(newEvent, 'offsetY', { get: () => offsetY });

      canvas.dispatchEvent(newEvent);
    };

    const handleMouseUp = (event) => {
      if (!event.isTrusted) return;
      const newEvent = new MouseEvent(event.type, {
        clientX: event.clientX,
        clientY: event.clientY,
        screenX: event.screenX,
        screenY: event.screenY,
        buttons: event.buttons,
        bubbles: false,
        cancelable: true,
      });
      canvas.dispatchEvent(newEvent);
    };

    // Forward touch events for mobile compatibility
    const forwardTouchEvent = (event) => {
      if (!event.isTrusted) return;
      const createMockTouchList = (touches) => {
        return Array.from(touches).map((touch) => ({
          identifier: touch.identifier,
          pageX: touch.clientX,
          pageY: touch.clientY,
          clientX: touch.clientX,
          clientY: touch.clientY,
          screenX: touch.screenX,
          screenY: touch.screenY,
          target: canvas,
        }));
      };

      const mockTouches = createMockTouchList(event.touches);
      const mockTargetTouches = createMockTouchList(event.targetTouches);
      const mockChangedTouches = createMockTouchList(event.changedTouches);

      const newEvent = new Event(event.type, {
        bubbles: false,
        cancelable: true,
      });

      Object.defineProperty(newEvent, 'touches', { get: () => mockTouches });
      Object.defineProperty(newEvent, 'targetTouches', { get: () => mockTargetTouches });
      Object.defineProperty(newEvent, 'changedTouches', { get: () => mockChangedTouches });

      canvas.dispatchEvent(newEvent);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', forwardTouchEvent, { passive: false });
    window.addEventListener('touchmove', forwardTouchEvent, { passive: false });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', forwardTouchEvent);
      window.removeEventListener('touchmove', forwardTouchEvent);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999, // Render on top but let pointer events pass through
        pointerEvents: 'none',
        opacity: 0.35, // Lower opacity for an elegant, subtle watermark-like watercolor trail
      }}
    />
  );
}

export default FluidBackground;
