
describe("API Tests", () => {

  it("GET: All Posts", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    })
      .then((response) => {
        expect(response).to.have.property("status", 200);
        console.log(response);  
      });
  });

  it("GET: First Post", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/1"
    })
      .then((response) => {
        expect(response).to.have.property("status", 200);
        expect(response.body).to.have.property("id", 1);
        console.log(response);
      });
  });

  it("GET: All Comments on first Post using query string", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
      qs:{
        "postId": "1"
      }
    })
      .then((response) => {
        expect(response).to.have.property("status", 200);
        console.log(response);  
      });
  });

  it("POST: Create a New Post", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: JSON.stringify({
        title: "Post ABC title",
        body: "Post ABC body",
        userId: 100
      }),
      headers:{
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        expect(response).to.have.property("status", 201);
        expect(response.body).to.have.property("title", "Post ABC title");
        console.log(response);
      });
  });
  
  it("PUT: Update title of a particular Post with Id 100", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/100",
      body: JSON.stringify({
        title: "Post ABC title update"
      }),
      headers:{
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        expect(response).to.have.property("status", 200);
        expect(response.body).to.have.property("title", "Post ABC title update");
        console.log(response);  
      });
  });

  it("DELETE: Delete a particular Post with Id 100", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/100"
    })
      .then((response) => {
        expect(response).to.have.property("status", 200);
      });
  });
});