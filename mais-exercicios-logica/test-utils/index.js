function jAssert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
  console.log(`PASSED: ${msg}`);
}

function test(title, code) {
  console.log(`Inicinado '${title}'...`);
  code();
  console.log(`Completo '${title}'`);
}
