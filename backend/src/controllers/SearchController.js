const Dev = require('../models/Dev')
const parseStringArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringArray(techs);

        const devs = await Dev.find({
            techs: {
                $in:techsArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [latitude,longitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({devs});
    }
}