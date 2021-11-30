var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true,
    },
  });

module.exports = {
    name: 'photo',
    description: "this is a ping command!",
    async execute(client, message, args) {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('No photo with this value')


        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url)
    }
}