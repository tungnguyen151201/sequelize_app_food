import initModels from "../Models/init-models.js";
import sequelize from "../Models/index.js";

const { rate_res } = initModels(sequelize);

const createRate = async (req, res) => {
  try {
    const { userId, resId, amount } = req.body;
    if (!userId || !resId || !amount) {
      res.status(400).send("UserId, ResId or Amount empty");
      return;
    }

    const rate = await rate_res.create({
      user_id: userId,
      res_id: resId,
      amount,
      date_rate: Date.now(),
    });

    res.send(rate);
  } catch (e) {
    res.status(500).send(e);
  }
};

const getRate = async (req, res) => {
  try {
    const { resId, userId } = req.query;
    if (!userId && !resId) {
      res.status(400).send("UserId and ResId empty");
      return;
    }

    let condition;
    if (userId) condition = { user_id: userId };
    if (resId) condition = { ...condition, res_id: resId };

    const data = await rate_res.findAll({
      where: condition,
    });

    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

export { createRate, getRate };
