import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => setFollowerPos({ x: e.clientX, y: e.clientY }), 50);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: position.x - 6, top: position.y - 6 }}
      />
      <div
        className="custom-cursor-follower"
        style={{ left: followerPos.x - 16, top: followerPos.y - 16 }}
      />
    </>
  );
};

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-accent-green selection:text-cream bg-cream dark:bg-[#0d140f] text-text-dark dark:text-cream transition-colors duration-300">
      <CustomCursor />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
