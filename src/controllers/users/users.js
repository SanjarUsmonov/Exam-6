const {
  postUserFetch,
  getAllUsersFetch,
  getUserByIdFetch,
  getUserByLimitFetch,
  getUserByDateFetch,
  updateUserFetch,
  deleUserFetch,
  updateUserStatusFetch,
} = require("./model");

const postUser = async (req, res) => {
  const { username, password, isDo } = req.body;
  const user = await postUserFetch(username, password, isDo);
  res.status(201).json({ user });
};

const getAllUser = async (req, res) => {
  const user = await getAllUsersFetch();
  res.status(200).json(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserByIdFetch(id);
  res.status(200).json(user);
};

const getUserByLimit = async (req, res) => {
  const { offset, limit } = req.query;
  const user = await getUserByLimitFetch(offset, limit);
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, password, isDo } = req.body;
  const user = await updateUserFetch(username, password, isDo, id);
  res.status(200).json({ user });
};

const deleUser = async (req, res) => {
  const { id } = req.params;
  await deleUserFetch(id);
  res.status(200).json({ message: "User deleted" });
};

const getUserByDate = async (req, res) => {
  const { fromDate, toDate } = req.query;
  const user = await getUserByDateFetch(fromDate, toDate);
  res.status(200).json({ user });
};

const updateUserStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const user = await updateUserStatusFetch(status, id);
  res.status(200).json({ user });
};

module.exports = {
  postUser,
  getAllUser,
  getUserById,
  getUserByLimit,
  getUserByDate,
  updateUser,
  deleUser,
  updateUserStatus,
};
