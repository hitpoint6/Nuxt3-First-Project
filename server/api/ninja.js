export default defineEventHandler(async (event) => {

    // handle query params
    // const { name } = getQuery(event);

    // const { age } = await readBody(event);

    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_9bac9lxpcFhvKq8vJngji4fazHgllc1b0VjTvs4t`)

    console.log(data)
    return data
})