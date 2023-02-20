describe('create gallery test', ()=>{
    before("visit app and log in",()=>{
        cy.request({
            method:"POST",
            URL: "https://gallery-api.vivifyideas.com/api/auth/login",
            body: {
              email: "kaurinstojanka@gmail.com",
              password: "GALERIJA123",
    },
})


.its("body")
.then((response)) => {
    window.localStorage.setItem("token",response.access_token);
      });

});
