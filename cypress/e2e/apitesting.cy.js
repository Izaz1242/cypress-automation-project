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

  it("POST Call", () => {
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

  it("GET call frm Commnd", () => {
    let requesturl = "https://jsonplaceholder.typicode.com//posts/1";
    //let requesturl = Cypress.env("baseUrl") + "posts/1";
    cy.getRequest(requesturl).then((response) => {
      cy.log("Gt request Response is " + JSON.stringify(response));

      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("userId", 1);
      expect(response.body).to.have.property("id", 1);
      expect(response.body).to.have.property(
        "title",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
    });
  });
});
