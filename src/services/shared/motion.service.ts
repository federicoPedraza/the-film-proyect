// Libs
import { Variants } from "framer-motion";
// Types
import { transformProps, transitionProps } from '../../interfaces/motion.interface'
export const boilerplateMotion = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    transition: "transition",
};
export const PathApparition = () => {
    return {
        initial: {
            pathLength: 0,
            opacity: 0,
        },
        animate: {
            pathLength: 1,
            opacity: 1,
        },
    };
};

export const delayedAnimation = (transitionProps: transitionProps) => {
    const {
        delay = 0,
        duration,
        ease = "easeInOut",
        type,
        damping = 40,
        mass = 1,
        stiffness = 300,
    } = transitionProps || {};
    return {
        delay: delay,
        duration: duration,
        ease: ease,
        type: type,
        damping: damping,
        mass: mass,
        stiffness: stiffness,
    };
};
export const offsetApparition = (
    transform: transformProps,
    initialTransparency = 0,
    exitTransition: transitionProps = {}
): Variants => {
    const { offsetX, offsetY, targetX, targetY } = transform;
    const {
        delay: eDelay = 0,
        duration: eDuration,
        ease: eEase,
        type: eType,
        damping: eDamping,
        mass: eMass,
        stiffness: eStiffness,
    } = exitTransition || {};
    return {
        initial: {
            translateX: offsetX || 0,
            translateY: offsetY || 0,
            opacity: Number(initialTransparency) || 0,
        },
        animate: {
            opacity: 1,
            translateX: targetX || 0,
            translateY: targetY || 0,
        },
        exit: {
            translateX: offsetX || 0,
            translateY: offsetY || 0,
            opacity: Number(initialTransparency) || 0,
            transition: {
                delay: eDelay || 0,
                duration: eDuration,
                ease: eEase,
                type: eType,
                damping: eDamping,
                mass: eMass,
                stiffness: eStiffness,
            },
        },
    };
};
