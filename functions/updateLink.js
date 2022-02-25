require("dotenv").config();
const { UPDATE_LINK } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  const { name, url, description, _id: id, archived } = JSON.parse(event.body);
  const variables = { name, url, description, archived, id };

  if (event.httpMethod !== "PUT") {
    return formattedResponse(403, { error: "Method not supported" });
  }

  try {
    const { updateLink: updatedLink } = await sendQuery(UPDATE_LINK, variables);
    // const data = res.allLinks.data;
    return formattedResponse(200, updatedLink);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, { error: "Something went wrong" });
  }
};
