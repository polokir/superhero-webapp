const HeroModel = require('../models/Hero') 

class HeroService{

    async add_new(nickname,real_name,origin_description,superpowers,catch_phrase,images){
        const existing_hero = await HeroModel.findOne({nickname});
        if(existing_hero){
            throw new Error("Hero with this nickname exists");
        }

        const newHero = await HeroModel.create({nickname,real_name,origin_description,superpowers,catch_phrase,images});
        console.log(newHero);
        return newHero;
    }

    async get_all(page,pageSize){
        const nextDocs = (page-1)*pageSize;
        const heros = await HeroModel.find().skip(nextDocs).limit(pageSize);
        return heros;
    }

    async update_hero(id,nickname,real_name,origin_description,superpowers,catch_phrase,images){
        const newHero = await HeroModel.updateOne(
            {_id:id},
            {
                nickname,real_name,origin_description,superpowers,catch_phrase,images
            },
        )

        return newHero;
    }

    async remove(id){
        const deleted = await HeroModel.findByIdAndDelete(id);
        if(!deleted){
            throw new Error("Not found");
        }
        return deleted;
    }

}

module.exports = new HeroService();