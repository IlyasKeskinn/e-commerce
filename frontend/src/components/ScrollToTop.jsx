import { useEffect } from 'react'
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }, [location.pathname])
}
