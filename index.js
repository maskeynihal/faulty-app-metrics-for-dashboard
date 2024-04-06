const { getHTMLForUsersMetrics } = require("./app");

exports.handler = async (event) => {
  return await getHTMLForUsersMetrics();
};
