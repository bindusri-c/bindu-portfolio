import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once when in view
    threshold: 0.3,     // % of component visible before triggering
  });

  return (
    <section
      id="stats"
      ref={ref}
      className="bg-gradient-to-br from-pink-50 to-purple-100 py-12 text-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-pink-800 text-5xl font-extrabold">
        <div className="flex flex-col items-center">
          <span>{inView ? <CountUp end={10} duration={2} /> : 0}+</span>
          <span className="text-base font-medium text-gray-700 mt-1">Projects</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{inView ? <CountUp end={6} duration={2} /> : 0}</span>
          <span className="text-base font-medium text-gray-700 mt-1">Certifications</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{inView ? <CountUp end={5} duration={2} /> : 0}</span>
          <span className="text-base font-medium text-gray-700 mt-1">Awards</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{inView ? <CountUp end={300} duration={5} /> : 0}+</span>
          <span className="text-base font-medium text-gray-700 mt-1">Coding</span>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
