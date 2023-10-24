export default defineEventHandler(async (event) => {
    const { code } = event.context.params;
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${process.env.CURRECNY_API_KEY}`)

    console.log(data)
    return data
})