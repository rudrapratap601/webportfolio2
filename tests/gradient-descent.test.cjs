const { test } = require('node:test');
const assert = require('node:assert/strict');
const ts = require('typescript');
const fs = require('node:fs');
const vm = require('node:vm');
const context = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync('lib/gradient-descent.ts','utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, context);
const { initialFit, step } = context.exports;
test('gradient descent reduces error and recovers the synthetic trend', () => {
  let fit = initialFit();
  for(let i=0;i<200;i++) { const next=step(fit,0.1); assert.ok(next.loss <= fit.loss); fit=next; }
  assert.ok(Math.abs(fit.slope-0.7)<0.05);
  assert.ok(Math.abs(fit.intercept-0.2)<0.05);
  assert.ok(fit.loss<0.01);
});
test('large learning rate demonstrates instability', () => {
  let fit=initialFit();
  for(let i=0;i<30;i++) fit=step(fit,1.1);
  assert.ok(fit.loss>100);
});

test('closed form recovers an exact line and rejects singular inputs', () => {
  const { closedForm } = context.exports;
  const result = closedForm([-2,-1,0,1,2].map(x=>({x,y:3*x+2})));
  assert.equal(result.slope,3); assert.equal(result.intercept,2); assert.equal(result.loss,0);
  assert.throws(()=>closedForm([{x:1,y:2},{x:1,y:3}]));
});
test('sampled methods converge reproducibly and full batch matches batch descent', () => {
  const { sampledStep } = context.exports;
  for (const size of [1,5,21]) {
    let fit=initialFit();
    for(let i=0;i<200;i++) fit=sampledStep(fit,0.1,size);
    assert.ok(fit.loss<0.02);
    assert.deepEqual(sampledStep(initialFit(),0.1,size),sampledStep(initialFit(),0.1,size));
  }
  assert.ok(Math.abs(sampledStep(initialFit(),0.1,21).loss-step(initialFit(),0.1).loss)<1e-12);
});
