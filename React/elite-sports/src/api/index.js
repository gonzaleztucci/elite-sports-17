const fetchUsers = async () => {
    const endpoint = 'https://randomuser.me/api/?results=10'

    try {
        const response = await fetch(endpoint);
        if(response.ok){
            const jsonResponse = await response.json();
            return jsonResponse.results;
        }

    } catch (error){
        console.log(error)
    }
} 

export default fetchUsers;