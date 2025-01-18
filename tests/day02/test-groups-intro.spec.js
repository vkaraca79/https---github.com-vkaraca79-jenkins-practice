import {test} from "@playwright/test";

test.describe("User Story", () => {

    test.beforeAll(async () => {
        console.log("Before All Test Cases are executed");
    });
    
    test.afterAll(async () => {
        console.log("After All Test Cases are executed");
    });

    test.beforeEach(async ({page}) => {
        console.log("Before Each Test Case is executed");
    });

    test.afterEach(async ({page}) => {
        console.log("After Each Test Case is executed");
    });

    test("Test Case 1", async () => {
        console.log("Test Case 1 is executed");
    });

    test("Test Case 2", async () => {
        console.log("Test Case 2 is executed");
    });

    test("Test Case 3", async () => {
        console.log("Test Case 3 is executed");
    });

    test("Test Case 4", async () => {
        console.log("Test Case 4 is executed");
    });

});