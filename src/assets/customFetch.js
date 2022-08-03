export const customFetch = (product) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(product)
        }, 2500)
    })
}