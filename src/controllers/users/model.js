const { fetch } = require("../../utils/pg");

const postUser =
  "INSERT INTO users(user_username, user_password, user_is_do)VALUES($1, $2, $3) RETURNING*";
const getAllUsers = "SELECT * from users";
const getUserById = "SELECT * from users where user_id=$1";
const getUserByLimit = "SELECT * from users offset $1 limit $2";
const getUserBydate = "SELECT * from user ";
const updateUser =
  "UPDATE users set user_username=$1, user_password=$2, user_is_do=$3 where user_id=$4 RETURNING*";
const deleUser = "DELETE from users where user_id=$1";

const postUserFetch = (username, password, isDo) =>
  fetch(postUser, username, password, isDo);
const getAllUsersFetch = () => fetch(getAllUsers);
const getUserByIdFetch = (id) => fetch(getUserById, id);
const getUserByLimitFetch = (offset, limit) =>
  fetch(getUserByLimit, offset, limit);
const updateUserFetch = (username, password, isDo, id) =>
  fetch(updateUser, username, password, isDo, id);
const deleUserFetch = (id) => fetch(deleUser, id);

module.exports = {
  postUserFetch,
  getAllUsersFetch,
  getUserByIdFetch,
  getUserByLimitFetch,
  updateUserFetch,
  deleUserFetch,
};
