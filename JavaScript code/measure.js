const { PerformanceObserver, performance } = require('perf_hooks');
const ExcelJS = require('exceljs');

// Explicitly assigning float values
function assignFloatsExplicitly() {
    let f1 = Number(1.1);
    let f2 = Number(1.2);
    let f3 = Number(1.3);
    let f4 = Number(1.4);
    let f5 = Number(1.5);
    let f6 = Number(1.6);
    let f7 = Number(1.7);
    let f8 = Number(1.8);
    let f9 = Number(1.9);
    let f10 = Number(1.0);
  }
  
  // Implicitly assigning float values
  function assignFloatsImplicitly() {
    let f1 = 1.1;
    let f2 = 1.2;
    let f3 = 1.3;
    let f4 = 1.4;
    let f5 = 1.5;
    let f6 = 1.6;
    let f7 = 1.7;
    let f8 = 1.8;
    let f9 = 1.9;
    let f10 = 1.0;
  }
  
  // Explicit float arithmetic
  function explicitFloatArithmetic() {
    let f1 = Number(1);
    let f2 = Number(2);
    f1 = f1 + f2;
  }
  
  // Mixed float arithmetic
  function mixedFloatArithmetic() {
    let f1 = 1.0;
    let f2 = Number(2);
    f1 = f1 + f2;
  }
  
  // Explicit integer arithmetic
  function explicitIntegerArithmetic() {
    let i1 = parseInt(1, 10);
    let i2 = parseInt(2, 10);
    i1 = i1 + i2;
  }
  
  // Mixed integer arithmetic
  function mixedIntegerArithmetic() {
    let i1 = 1;
    let i2 = parseInt(2, 10);
    i1 = i1 + i2;
  }
  
  // Explicitly mixed arithmetic
  function explicitLikewiseMixedArithmetic() {
    let f1 = Number(2.1);
    let f2 = Number(3.2);
    let i1 = parseInt(1, 10);
    let i2 = parseInt(2, 10);
    f1 = f1 + f2;
    i1 = i1 + i2;
    f1 = f1 + i1;
  }
  
  // More explicitly mixed arithmetic
  function explicitMixedLikewiseArithmetic() {
    let f1 = Number(2.1);
    let f2 = Number(3.2);
    let i1 = parseInt(1, 10);
    let i2 = parseInt(2, 10);
    f1 = f1 + i1;
    f2 = f2 + i2;
    f1 = f1 + f2;
  }
  
  // store all functions in a list
  const functionsToMeasure = [
    assignFloatsExplicitly,
    assignFloatsImplicitly,
    explicitFloatArithmetic,
    mixedFloatArithmetic,
    explicitIntegerArithmetic,
    mixedIntegerArithmetic,
    explicitLikewiseMixedArithmetic,
    explicitMixedLikewiseArithmetic
  ];

async function measureAndSaveRuntime(functions) {
  const numMeasurements = 1000;
  const results = {};

  // Initialize results object with an empty array for each function
  functions.forEach(func => {
    results[func.name] = [];
  });

  // Measure the runtime for each function
  for (const func of functions) {
    for (let i = 0; i < numMeasurements; i++) {
      const start = performance.now();
      func(); // Call the function
      const end = performance.now();
      results[func.name].push(end - start);
    }
  }

  // Create a workbook and add a sheet
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Runtimes');

  // Add a header row with function names
  sheet.addRow(['Measurement', ...functions.map(func => func.name)]);

  // Add the time measurements for each function in separate columns
  for (let i = 0; i < numMeasurements; i++) {
    const row = [i + 1];
    functions.forEach(func => {
      row.push(results[func.name][i]);
    });
    sheet.addRow(row);
  }

  // Write to an Excel file
  const excelFile = 'function_runtimes.xlsx';
  await workbook.xlsx.writeFile(excelFile);
  console.log(`Done. The measurements have been saved to ${excelFile}`);
}

measureAndSaveRuntime(functionsToMeasure).catch(console.error);
