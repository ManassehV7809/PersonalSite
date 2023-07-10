import React from 'react';
import './index.scss';

const AnimatedSpans = () => {
  return (
    <h2 className="header">
      <strong>
      <span>Hello!</span> {/* English */}
      <span>Ndaa!</span> {/* Venda */}
        <span>Sawubona!</span> {/* Zulu */}
        <span>Molo!</span> {/* Xhosa */}
        <span>Goeie dag!</span> {/* Afrikaans */}
        <span>Dumela!</span> {/* Northern Sotho */}
        <span>Sawubona!</span> {/* Swati */}
        <span>Avuxeni!</span> {/* Tsonga */}
        <span>Lotjhani!</span> {/* Ndebele */}
      </strong>
    </h2>
  );
};

export default AnimatedSpans;
