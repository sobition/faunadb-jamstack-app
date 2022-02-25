require("dotenv").config();
const { DELETE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const variables = { id };
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(403, { error: "Method not supported" });
  }
  try {
    const { deleteLink: deletedLink } = await sendQuery(DELETE_LINK, variables);
    // const data = res.allLinks.data;
    return formattedResponse(200, deletedLink);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, { error: "Something went wrong" });
  }
};
