

export const getAnimeResponse = async ({resource, query} ) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime ;
}

export const getNestedAnimeResponse = async ({resource, objectProperty } ) => {
    const response = await getAnimeResponse({resource : resource})
    if (!response || !response.data) {
        console.error('Error: Response or response.data is undefined.');
        return [];
    }
    return response.data.flatMap(item => item.entry)
}

export function shuffleArray(array, slice) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
   return {data : array.slice(0,slice)}
}