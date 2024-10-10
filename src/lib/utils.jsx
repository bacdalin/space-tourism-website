// Utility function to fetch the data of the relevant page/tab (based on page name parameter in the url)
export const dataLoader = async ({ params }, url) => {
    // Normalize the 'params.name' by replacing hyphens with spaces and lowercasing
    const normalizedParamName = params.name.replace(/-/g, ' ').toLowerCase();

    // Fetch all data from the url
    const res = await fetch(url);
    const data = await res.json();

    // Find the item with the normalized name (ignoring case and spaces)
    const matchedItem = data.filter(item => 
        item.name.toLowerCase().replace(/\s+/g, ' ').trim() === normalizedParamName
    );

    return matchedItem[0] || null; // Return the matched item or null if not found
    // Since the result is an array, return the first matching item (there should be only one)
};

// *** Previous dataLoader function (replaced by the new one above for a more flexible way 
// *** to handle the capitalization and spacing issues in 'params.name')

// export const dataLoader = async ({ params }, url) => {
//     // Check if "name" is a single word or has hyphen (multi-word)
//     // If yes, replace the hyphen with space and capitalize the first letter of each word
//     // If no, capitalize the first letter
//     const fullName = params.name.includes('-')
//     ? params.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
//     : params.name.charAt(0).toUpperCase() + params.name.slice(1);

//     const res = await fetch(`${url}?name=${fullName}`);
//     const data = await res.json();
//     return data[0]; // Since the result is an array, return the first matching item (there should be only one)
// };