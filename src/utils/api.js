const API = 'https://yts.lt/api/v2/'

class Api {
    async getSuggestion(id){
        const query =  await fetch(`${API}movie_suggestions.json?movie_id=${id}`);
        const { data } = await query.json();
        return data.movies
    }
    async getCategory(){
        const query =  await fetch(`${API}list_movies.json?`);
        const { data } = await query.json();

        return data.movies
    }
}
export default new Api();