module.exports = (ctx) => {
    ctx.command('ba <type>','从币安获取当前币价')
        .example('ba eth')
        .action(async (_, type) => {
            type = type.toUpperCase() + 'USDT'
            const f = (t) => Math.floor(t * 1000) / 1000
            const { body } = await require('superagent').get('https://api.binance.com/api/v3/ticker/24hr?symbol=' + type)
            return `${type}
最新价格 ${f(body.lastPrice)}(价格变化 ${f(body.priceChange)})
24h最高 ${f(body.highPrice)}
24h最低 ${f(body.lowPrice)}`
        })
}
