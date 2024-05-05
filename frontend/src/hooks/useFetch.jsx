import { useState, useEffect } from "react"

const useFetch = (url, method = "GET", { token } = {}, { trigger } = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const [options, setOptions] = useState(null);
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = `${apiUrl}${url}`;


    const postData = (data) => {
        setOptions({
            "method": "POST",
            "headers": {
                "Content-type": "application/json",
                "x-auth-token": token
            },
            "body": JSON.stringify(data)
        })
    }

    const updateData = (data) => {
        setOptions({
            "method": "PUT",
            "headers": {
                "Content-type": "application/json",
            },
            "body": JSON.stringify(data)
        })
    }


    useEffect(() => {
        const fetchData = async (options) => {
            setLoading(true);
            try {
                console.log(fetchUrl);
                const response = await fetch(fetchUrl, { ...options });
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
        if (method === "GET" || trigger) {
            fetchData();
        }
        if (method === "POST" && options) {
            fetchData(options);
        }
        if (method === "PUT" && options) {
            fetchData(options);
        }
    }, [fetchUrl, method, options, trigger]);

    return {
        data,
        isLoading,
        error,
        postData,
        updateData,
    }
}

export default useFetch;