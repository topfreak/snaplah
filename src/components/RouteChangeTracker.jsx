import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
    const location = useLocation();

    useEffect(() => {
        // Kirim event "pageview" dengan path halaman saat ini
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]); // useEffect ini akan berjalan setiap kali 'location' berubah

    return null; // Komponen ini tidak me-render apa pun
};

export default RouteChangeTracker;