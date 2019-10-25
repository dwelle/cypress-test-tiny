describe('suite A', () => {
  it('test A', () => {
    cy.visit(`https://google.com`)
    cy.window().then(win => {
      win.history.pushState({}, null, `/`)
    });
    cy.go(-1);
  });
});
