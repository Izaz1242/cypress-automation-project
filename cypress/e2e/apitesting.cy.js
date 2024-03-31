describe("HTTP Requests", () => {
  it("GET call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("POST Call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "Test post",
        body: "This is post call",
        userId: 1,
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it.only("POST Call", () => {
    cy.fixture("softcode").then((requestBody) => {
      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts/",
        body: requestBody,
      }).then((response) => {
        const { title, body, userId } = response?.body;
        const {
          title: requestBodyTitle,
          body: requestBodyBody,
          userId: requestBodyUserId,
        } = requestBody;
        expect(response?.status).to.eq(201);
        expect(title).to.eq(requestBodyTitle);
        expect(body).to.eq(requestBodyBody);
        expect(userId).to.eq(requestBodyUserId);
      });
    });
  });
});
