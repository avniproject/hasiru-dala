/*
- Number of concepts in downloaded concepts file should match number of concepts for that ord in database. below script can check it in downloaded file and for database run select count(*) from concepts where organiosation_id = {org id}
- Check random sample in concepts for each type to see if all attributes are same in current file and new file
- Compare Number of form element groups and number of form elements per each form
- Check random sample of form elments to see if attributes are the same
- Check if things like voided, displayOrder, validFormat, keyValues, type, are same.
- Change filenames in Gruntfile.
 */


const concepts = require("./concepts");
const oldForm = require("./registration/registrationForm");
const newForm = require("./forms/Registration");
const lodash = require("lodash");


let oldElCount = 0;
let newElCount = 0;

let oldNonEmptyKeyValues = [];

let olduuids = [];
let oldgroupcount = 0;
oldForm.formElementGroups.forEach(g => {
    oldgroupcount++;
    g.formElements.forEach(e => {
        if(e.keyValues && e.keyValues.length > 0) {
            oldNonEmptyKeyValues.push(e.uuid);
        }
        olduuids.push(e.uuid);
    })
});

let newuuids = [];
let newgroupcount = 0;
let newNonEmptyKeyValues = [];


newForm.formElementGroups.forEach(g => {
    newgroupcount++;
    g.formElements.forEach(e => {
        if(e.keyValues && e.keyValues.length > 0) {
            newNonEmptyKeyValues.push(e.uuid);
        }
        newuuids.push(e.uuid);
    })
});

console.log(`concepts length: ${concepts.length}`);
console.log(`newgroupcount: ${newgroupcount}`);
console.log(`oldgroupcount: ${oldgroupcount}`);
console.log(`elements diff: ${lodash.difference(newuuids, olduuids)} `);
console.log(`elements diff: ${lodash.difference(olduuids, newuuids)} `);

console.log(`oldNonEmptyKeyValues: ${oldNonEmptyKeyValues} `);
console.log(`newNonEmptyKeyValues: ${newNonEmptyKeyValues} `);

