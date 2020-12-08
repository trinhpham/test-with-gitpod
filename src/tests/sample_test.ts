import { TestCase, TestModule, gondola } from "@logigear/gondola";
TestModule("Simple Test");

TestCase("1st simple test case", async () => {
    await gondola.navigate("http://google.com");
    await gondola.checkWindowExist("Google");
});
