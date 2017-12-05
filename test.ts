import { AutoRunner } from './node_modules/typespec-bdd/src/TypeSpec';
import { CustomTestReporter, CustomTestHooks  } from './Steps/CustomTestReporter';
import './steps/GuardSteps';

AutoRunner.testReporter = new CustomTestReporter();
AutoRunner.testHooks = new CustomTestHooks();

AutoRunner.run(
    './specifications/number.txt',
    './specifications/string.txt',
    './specifications/object.txt',
    './specifications/structure.txt'
).then(() => {
    console.log('Done');
})
.catch((error) => {
    alert('Error! ' + error);
});