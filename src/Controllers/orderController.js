import initModels from "../Models/init-models.js";
import sequelize from "../Models/index.js";

const { order } = initModels(sequelize);

const createOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const { foodId } = req.body;
    if (!userId || !foodId) {
      res.status(400).send("UserId or FoodId empty");
      return;
    }

    const data = { ...req.body, user_id: userId, food_id: foodId };

    const newOrder = await order.create(data);
    res.send(newOrder);
  } catch (e) {
    res.status(500).send(e);
  }
};

export { createOrder };
