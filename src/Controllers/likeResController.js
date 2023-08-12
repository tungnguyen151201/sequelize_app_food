import initModels from "../Models/init-models.js";
import sequelize from "../Models/index.js";

const { like_res } = initModels(sequelize);

const handleLike = async (req, res) => {
  try {
    const { userId, resId } = req.body;
    if (!userId || !resId) {
      res.status(400).send("UserId or ResId empty");
      return;
    }

    // Like
    const [liked, created] = await like_res.findOrCreate({
      where: { user_id: userId, res_id: resId },
      defaults: {
        user_id: userId,
        res_id: resId,
        date_like: Date.now(),
      },
    });

    if (created) {
      res.status(201).send("Liked restaurant successful");
      return;
    }

    // Unlike
    if (liked) {
      await liked.destroy();
      res.send("Unliked restaurant sucessful");
    }
  } catch (e) {
    res.send(e);
  }
};

const getLike = async (req, res) => {
  try {
    const { resId, userId } = req.query;
    if (!userId && !resId) {
      res.status(400).send("UserId and ResId empty");
      return;
    }

    let condition;
    if (userId) condition = { user_id: userId };
    if (resId) condition = { ...condition, res_id: resId };

    const data = await like_res.findAll({
      where: condition,
    });

    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

export { handleLike, getLike };
