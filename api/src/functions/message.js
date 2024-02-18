const { app } = require("@azure/functions");

app.http("message", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get("name") || "mysterious";
    return { body: `Hello, ${name}!` };
  },
});
