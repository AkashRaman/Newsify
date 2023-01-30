const { async } = require("regenerator-runtime");

export const getJSON = async(url,header,errorMsg = "Something went wrong") => {
    const response = header ? await fetch(url,header) : await fetch(url);
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
}