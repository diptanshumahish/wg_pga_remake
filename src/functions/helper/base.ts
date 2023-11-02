export function fileToBase64(file: File): Promise<string | null> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const result = reader.result;
            if (typeof result === "string") {
                resolve(result);
            } else {
                reject(new Error("Failed to read file as base64."));
            }
        };

        reader.onerror = () => {
            reject(new Error("Error reading the file."));
        };

        try {
            reader.readAsDataURL(file);
        } catch (error) {
            reject(new Error("Error reading file: " + error.message));
        }
    });
}
