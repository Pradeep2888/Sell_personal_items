import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useBrowserFocus = (onFocus) => {
    useEffect(() => {
        const handleWindowFocus = () => {
            onFocus();
        };

        window.addEventListener('focus', handleWindowFocus);

        return () => {
            window.removeEventListener('focus', handleWindowFocus);
        };
    }, [onFocus]);
};
export const useQueryData = () => {
    const [queryParams, setQueryParams] = useState({})
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();

    // const searchParams = {}
    // URLSearchParams?.forEach((value, key, parent) => {
    //     if (searchParams[key]) {
    //         searchParams[key] = value
    //     } else {
    //         searchParams[key] = value
    //     }
    // });
    useEffect(() => {
        const searchParams = {}
        URLSearchParams?.forEach((value, key, parent) => {
            if (searchParams[key]) {
                searchParams[key] = value
            } else {
                searchParams[key] = value
            }
        });
        setQueryParams(searchParams)
    }, []);
    return queryParams
};


export function createValidator(schema) {
    return function validate(formData) {
        const errors = {};

        Object.keys(schema).forEach((key) => {
            const error = schema[key](formData[key]);
            if (error) {
                errors[key] = error;
            }
        });

        return errors;
    };
}

export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}


