function formulaGauss(n) {
  if (n < 0) {
    return undefined;
  }
  return (n + 1) * (n / 2);
}

function teste() {
  test("formulaGauss: funciona corretamente", () => {
    jAssert(formulaGauss(0) === 0, "para 0");
    jAssert(formulaGauss(1) === 1, "para 1");
    jAssert(formulaGauss(2) === 3, "para 2");
    jAssert(formulaGauss(10) === 55, "para 10");
    jAssert(formulaGauss(10000) === 50005000, "para 10.000");
    jAssert(formulaGauss(-1) === undefined, "para -1");
  });
}

teste();
