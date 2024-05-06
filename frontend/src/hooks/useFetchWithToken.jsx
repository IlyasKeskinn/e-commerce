import { useState, useEffect } from "react"

const useFetchWithToken = (url, token) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const [options, setOptions] = useState(null);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = `${apiUrl}${url}`;


    useEffect(() => {
        const fetchData = async (options) => {
            setLoading(true);
            try {
                console.log(fetchUrl);
                console.log(options);
                const response = await fetch(fetchUrl, {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json",
                        "x-auth-token": token
                    },
                });
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setLoading(false);
                setError(error);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [fetchUrl]);

    return {
        data,
        isLoading,
        error,
    }
}

export default useFetchWithToken;