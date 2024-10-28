/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

const CustomCursor = ({ hover }) => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const mouseMoveHandler = (e) => {
            gsap.to(cursor, {
                duration: 0.5,
                x: e.clientX,
                y: e.clientY,
                ease: "power3.out"
            });
        };

        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor"
            style={{
                position: 'absolute',
                width: `${hover ? "100px" : "20px"}`,
                height: `${hover ? "100px" : "20px"}`,
                transition: 'height 0.3s ease-in-out, width 0.3s ease-in-out',
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1000,
                mixBlendMode: 'difference',
            }}
        />
    );
};

CustomCursor.propTypes = {
    hover: PropTypes.string.isRequired,
};

export default CustomCursor;
