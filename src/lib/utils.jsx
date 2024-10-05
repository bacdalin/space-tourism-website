// Utility function to fetch the data of the relevant page/tab (based on page name parameter in the url)
export const dataLoader = async ({ params }, url) => {
    // Cehck if "name" is a single word or has hyphen (multi-word)
    // If yes, replace the hyphen with space and capitalize the first letter of each word
    // If no, capitalize the first letter
    const fullName = params.name.includes('-')
    ? params.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : params.name.charAt(0).toUpperCase() + params.name.slice(1);

    const res = await fetch(`${url}?name=${fullName}`);
    const data = await res.json();
    return data[0]; // Since the result is an array, return the first matching item (there should be only one)
};