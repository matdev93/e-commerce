//* Referencia a la coleccion con su esquema determinado
const User = require('../models/User');

const createUser = async (req, res) => {
  //* Guardar informacion en mi base de datos.

  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.json({ success: true, message: 'Usuario Creado', info: newUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, info: users });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const contain = req.body;

    const updateUser = await User.findByIdAndUpdate(id, contain, { new: true });

    res.json({ success: true, message: 'Usuario actualizado', updateUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const destroyUser = await User.findByIdAndDelete(id);
    res.json({ success: true, message: 'Usuario eliminado', destroyUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createUser, getUsers, editUser, deleteUser };
