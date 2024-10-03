// Utility function to fetch the data of the relevant page/tab (based on page name parameter in the url)
export const dataLoader = async ({ params }, url) => {
    const res = await fetch(`${url}?name=${params.name}`);
    const data = await res.json();
    return data[0]; // Since the result is an array, return the first matching item (there should be only one)
};