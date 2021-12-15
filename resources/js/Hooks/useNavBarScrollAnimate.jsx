import { useState, useEffect } from "react";

const useNavBarScrollAnimate = () => {
    const [showBG, setBG] = useState(false);

    const handleNavBarScroll = () => {
        setBG(window.scrollY);
    };
    window.addEventListener("scroll", handleNavBarScroll);

    return { showBG };
};

export default useNavBarScrollAnimate;
