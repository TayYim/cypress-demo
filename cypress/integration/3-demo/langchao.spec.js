// By Yan Songyang 3120105333 2022.5.26

describe("langchao website", () => {
  beforeEach(() => {
    cy.visit("https://langchao.org");
  });

  it("show header", () => {
    cy.contains("首页");
    cy.get("[href='/topic']").should("have.text", "话题");
    cy.contains("指南");
  });

  context("in the topic page", () => {
    beforeEach(() => {
      cy.get("[href='/topic']").click();
    });

    it("show topic page", () => {
      cy.contains("话题列表");
    });

    it("use alphabet order by default", () => {
      cy.get(".ant-segmented-item-selected").should("have.text", "首字母排序");
      cy.get(".ant-segmented-item-selected").should(
        "not.have.text",
        "层级排列"
      );
    });

    it("switch to layer view", () => {
      cy.contains("层级排列").click();
      cy.get(".ant-segmented-item-selected").should("have.text", "层级排列");
      cy.get(".ant-segmented-item-selected").should(
        "not.have.text",
        "首字母排序"
      );
    });
  });
});
