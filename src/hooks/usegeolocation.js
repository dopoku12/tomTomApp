import axios from "axios";
import { useEffect, useState } from "react";

const useGeoLocation = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const [usrLocation, setUsrLocation] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude;

                ((lat, lng) => {
                    const url = `https://api.tomtom.com/search/2/reverseGeocode/${lat},${lng}.json?key=${apiKey}`;
                    return (async (url) => {
                        try {
                            const res = await axios.get(url)
                            if (res.data)
                                setUsrLocation(res.data.addresses[0].address.countryCodeISO3);
                        }

                        catch (err) {
                            if (err.res)
                                console.log('errorResData:', err.res.data);
                            console.log('errorResStatus:', err.res.status);
                            console.log('errorResHeader:', err.res.header);
                        }
                    })(url)
                })(lat, lng)

            },
            (error) => console.log('error2:'))
    }, [apiKey])
    return { usrLocation }
}
export default useGeoLocation;