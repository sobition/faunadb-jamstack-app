const GET_LINKS = `
    query {
        allLinks{
          data{
            name
            url
            description
            archived
            _id
          }
        }
      }
    `;

module.exports = {
  GET_LINKS,
};
