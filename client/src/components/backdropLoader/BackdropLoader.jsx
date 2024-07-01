import React, { ReactNode, useCallback, useContext, useState } from "react";

// Create a context for managing loading state
const BackdropLoaderContext = React.createContext({
    loading: false,
    startLoading: () => { },
    closeLoading: () => { },
});

// Custom hook to consume the context
export const useBackdropLoader = () => {
    return useContext(BackdropLoaderContext);
};

export function BackdropLoader({ children }) {
    const { loading } = useBackdropLoader();

    return (
        <>
            {loading && (
                <div className="popup-overlay">
                    <div className="loader"></div>
                </div>
            )}
            {children}
        </>
    );
}

export const BackdropLoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const startLoading = useCallback(() => {
        setLoading(true);
    }, []);

    const closeLoading = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <BackdropLoaderContext.Provider
            value={{ loading, startLoading, closeLoading }}
        >
            {children}
        </BackdropLoaderContext.Provider>
    );
};
