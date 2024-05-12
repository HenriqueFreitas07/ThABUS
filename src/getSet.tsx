interface JsonObject {
    [key: string]: any;
}

// Get function
const getValue = (jsonObject: JsonObject, propertyPath: string): any => {
    const properties = propertyPath.split('.');
    let value: any = jsonObject;
    for (const prop of properties) {
        if (value[prop] !== undefined) {
            value = value[prop];
        } else {
            return undefined; // Property not found
        }
    }
    return value;
};

// Set function
const setValue = (jsonObject: JsonObject, propertyPath: string, newValue: any): void => {
    const properties = propertyPath.split('.');
    let parent: any = jsonObject;
    for (let i = 0; i < properties.length - 1; i++) {
        const prop = properties[i];
        if (parent[prop] === undefined) {
            parent[prop] = {}; // Create nested object if it doesn't exist
        }
        parent = parent[prop];
    }
    parent[properties[properties.length - 1]] = newValue;
};
export { getValue, setValue };