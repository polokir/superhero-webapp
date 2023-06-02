const HeroService = require("../services/HeroService");

class HeroController {
  async create(req, res) {
    try {
      const {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      } = req.body;
      const hero = await HeroService.add_new(
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
      );
      console.log("CREATE NEW HERO - ", hero);
      res.json(hero);
    } catch (error) {
      console.log(error);
    }
  }

  async read(req, res) {
    try {
      const heros = await HeroService.get_all();
      console.log("GET ALL HEROS - ", heros);
      res.json(heros);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;
    try {
      const id = req.params.id;
      const newHero = await HeroService.update_hero(
        id,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images
      );
      res.json(newHero);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const hero = await HeroService.remove(id);
      if (!hero) {
        return res.status(404).json({ message: "Not found" });
      }
      res.json(hero);
    } catch (error) {}
  }
}

module.exports = new HeroController();
