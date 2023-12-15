

export const getAnimeResponse = async ({resource, query} ) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    return await response.json()
}

export const getNestedAnimeResponse = async ({ resource, query ,objectProperty }) => {
    const response = await getAnimeResponse({ resource: resource , query: query });

    if (!response || !response.data) {
        console.error('Error: Response or response.data is undefined.');
        return [];
    }
    if (!Array.isArray(response.data)) {
        console.error('Error: Response data is not an array.');
        return [];
    }
    return response.data.flatMap(item => (item && item.entry) ? item.entry : []);
}

export function shuffleArray(array, slice) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
   return {data : array.slice(0,slice)}
}