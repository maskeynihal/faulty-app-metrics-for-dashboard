require("dotenv").config();

const ejs = require("ejs");
const axios = require("axios");

async function getUsersMetrics() {
  const { data: users } = await axios({
    method: "GET",
    url: process.env.USERS_METRICS_URL,
  });

  return users;
}

async function getPostMetrics() {
  console.log(process.env.POSTS_METRICS_URL);
  const { data: posts } = await axios({
    method: "GET",
    url: process.env.POSTS_METRICS_URL,
  });

  return posts;
}

async function getHTMLForPostMetrics() {
  const data = await getPostMetrics();

  const html = await ejs.renderFile("./view/posts.ejs", { data });

  return html;
}

async function getHTMLForUsersMetrics() {
  const data = await getUsersMetrics();

  const html = await ejs.renderFile("./view/users.ejs", {
    totalUsers: data.totalUsers,
  });

  return html;
}

module.exports = { getHTMLForPostMetrics, getHTMLForUsersMetrics };
