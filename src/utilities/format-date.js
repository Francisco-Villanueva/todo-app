export const formateTime = (inputDate)=>{
    const date = new Date(inputDate)


    const day =  new Date(date).toLocaleString()

    return `${day}`
}