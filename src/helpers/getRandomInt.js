const getRandomInt = () => {
     return new Promise ( resolve => {
         
        const rdnInt = Math.floor ( Math.random() * 20 )+1
        setTimeout(() => {
            resolve(rdnInt)
        }, 2000);
     })
} 
export default getRandomInt