function assert({ expected, result }) {
  if (result === undefined) {
    console.log("Incorreto");
    return;
  }
  console.log(
    expected === result ? "Correto" : "Incorreto",
    " -> ",
    expected,
    "=",
    result
  );
}

assert({
  expected: false || true,
  result: undefined,
});

assert({
  expected: false && true,
  result: undefined,
});

assert({
  expected: !(true || false),
  result: undefined,
});

assert({
  expected: !(!false && true),
  result: undefined,
});

assert({
  expected: (false || true) && (true || true),
  result: undefined,
});

assert({
  expected: (false && true) || (true && true),
  result: undefined,
});

assert({
  expected: false && true && true && true,
  result: undefined,
});

assert({
  expected: !(false && true) && true && true,
  result: undefined,
});

assert({
  expected: (false || true) && !(true && true),
  result: undefined,
});

assert({
  expected: ((false || true) && !(true && true)) || true,
  result: undefined,
});

assert({
  expected: true || ((false || true) && !(true && true)),
  result: undefined,
});

assert({
  expected: true || (false && true),
  result: undefined,
});
