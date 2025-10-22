import crypto from "node:crypto";

export const encodeAndDecode = (data, dataType, encodeType) => {
    try {
        const buffer = Buffer.from(data, dataType);
        const resultString = buffer.toString(encodeType);
        return resultString;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to encode the data");
    }
}
