"use client";

import React, { useState, useEffect } from "react";

export const Info = () => {
  const [counts, setCounts] = useState({ fans: 0, hours: 0, rating: 0 });

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const interval = duration / steps;

    const animate = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, interval);
    };

    // Start animations
    animate(4500000, "fans");
    animate(600, "hours");
    animate(100, "rating");

    // Cleanup intervals on unmount
    const timers: NodeJS.Timeout[] = [];
    animate(4500000, "fans");
    animate(600, "hours");
    animate(100, "rating");

    return () => {
      timers.forEach(clearInterval);
    };
  }, []); // Run once on mount

  return (
    <div className="container-fluid py-5 info">
      <div className="container">
        <div className="row g-2">
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <p className="info-text-sub2 text-center">
              {counts.fans.toLocaleString()}+
            </p>
            <p className="info-text text-center pt-2">Fans globally</p>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <p className="info-text-sub2 text-center">{counts.hours}+ Hours</p>
            <p className="info-text text-center pt-2">Unique content</p>
          </div>
          <div className="col-12 col-md-4 mb-0 mb-md-0">
            <p className="info-text-sub2 text-center">{counts.rating}%</p>
            <p className="info-text text-center pt-2">Happiness rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};
