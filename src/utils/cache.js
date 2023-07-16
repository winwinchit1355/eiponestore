export const setToken = (name,value) =>{
    localStorage.setItem(name,value);
}

export const getToken = async (name) => {
    return await localStorage.getItem(name);
 }
 
 export const removeToken = (name) => {
     localStorage.removeItem(name);
 }