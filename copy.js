// Run tests
testGetUserData(getUserDataAsync, "Async/Await version");
testGetUserData(getUserDataPromise, "Promise chaining version");
// Performance test with iterations
async function performanceTest(getUserData, iterations = 10, label) {
  const start = Date.now();
  for (let i = 0; i < iterations; i++) {
    await getUserData(5); // Using ID 5 for the performance test
  }
  const end = Date.now();
  console.log(
    `${label} Execution time for ${iterations} iterations: ${end - start}ms`
  );
}
// Run both versions of the performance test with multiple iterations
const iterations = 100;
performanceTest(getUserDataAsync, iterations, "Async/Await").then(() =>
  console.log("Async/Await performance test complete")
);
performanceTest(getUserDataPromise, iterations, "Promise chaining").then(() =>
  console.log("Promise chaining performance test complete")
);
