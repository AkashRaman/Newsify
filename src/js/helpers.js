const { async } = require("regenerator-runtime");

export const getJSON = async(url,errorMsg = "Something went wrong") => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
}