import { useTrail } from "@react-spring/web";

export const usePhotoAnimation = (numberOfItems) => {

    const trailAnimation = useTrail(numberOfItems, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { mass: 5, tension: 2000, friction: 200 },
    });

    return trailAnimation;
}