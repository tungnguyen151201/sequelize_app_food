import initModels from "../Models/init-models.js";
import sequelize from "../Models/index.js";

const { user } = initModels(sequelize);

const getUser = async (req, res) => {
  try {
    const data = await user.findAll();
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
};

export { getUser };
