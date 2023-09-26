"use strict";
// require functions
const { search } = require("../carStorageFilePromises");

describe("Testing with key 'licence' and value 'ABC-1'", () => {
  const result = [
    {
      model: "Border T-model",
      licence: "ABC-1",
    },
  ];

  test("then", () => {
    return search("licence", "ABC-1").then((data) =>
      expect(data).toEqual(result)
    );
  });

  test("async-await", async () => {
    const data = await search("licence", "ABC-1");
    expect(data).toEqual(result);
  });

  test("resolves", () => {
    return expect(search("licence", "ABC-1")).resolves.toEqual(result);
  });

  test("resolves with async", async () => {
    await expect(search("licence", "ABC-1")).resolves.toEqual(result);
  });
});
// reject
describe("Testing with licence to reject", () => {
  test("catch", () => {
    expect.assertions(1);
    return search().catch((err) => expect(err).toBe("parameter missing"));
  });

  test("async-await", async () => {
    expect.assertions(1);
    try {
      await search();
    } catch (err) {
      expect(err).toBe("parameter missing");
    }
  });

  test("rejects", () => {
    return expect(search()).rejects.toBe("parameter missing");
  });

  test("rejects with async", async () => {
    await expect(search()).rejects.toBe("parameter missing");
  });
});

describe("test with key 'model' ", () => {
  const resultForBoredTModel = [
    {
      model: "Border T-model",
      licence: "ABC-1",
    },
    {
      model: "Border T-model",
      licence: "GTF-10",
    },
  ];
  const resultForNova = [
    {
      model: "Nova",
      licence: "XYZ-123",
    },
  ];

  test("model 'Border T-model'", () => {
    return expect(search("model", "Border T-model")).resolves.toEqual(
      resultForBoredTModel
    );
  });

  test("model 'Nova'", () => {
    return expect(search("model", "Nova")).resolves.toEqual(resultForNova);
  });

  test("one parameter missing", () => {
    return expect(search("model")).rejects.toBe("parameter missing");
  });

  test("search with licence 'X' which does not exist", () => {
    return expect(search("licence", "X")).resolves.toEqual([]);
  });
});
