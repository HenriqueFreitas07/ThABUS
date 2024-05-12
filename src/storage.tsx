// Write object to localStorage
const writeToLocalStorage = (key: string, value: any): void => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error("Error writing to localStorage:", error);
    }
};

// Read object from localStorage
const readFromLocalStorage = (key: string): any => {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue !== null) {
            return JSON.parse(serializedValue);
        }
    } catch (error) {
        console.error("Error reading from localStorage:", error);
    }
    return undefined;
};

export { writeToLocalStorage, readFromLocalStorage };
