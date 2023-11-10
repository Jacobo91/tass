import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useAPI = (key, endpoint, options = {}, param = null) => {
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: `http://18.216.136.182:5000/${endpoint}`
        };

        const response = await axios.request(options)
        return response.data
    }

    const mergedOptions = {
        ...options
    }

    return useQuery({
        queryKey: [key, param],
        queryFn: fetchData,
        ...mergedOptions
    })
}