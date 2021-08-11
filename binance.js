module.exports = (ctx) => {
    ctx.command('ba <type>')
        .example('ba eth')
        .action(async (_, type) => {
            type = type.toUpperCase() + 'USDT'
            const f = (t) => Math.floor(t * 1000) / 1000
            const { body } = await require('superagent').get('https://api-binance.vercel.app/api/v3/ticker/24hr?symbol=' + type)
            return `${type}-USDT
最新价格 ${f(body.lastPrice)}(${f(body.priceChange)})
24h最高 ${f(body.highPrice)}
24h最低 ${f(body.lowPrice)}`
        })
}
