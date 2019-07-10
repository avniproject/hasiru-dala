const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');
const secrets = require('../secrets.json');

module.exports = IDI.configure({
    "name": "hasiru",
    "chs-admin": "admin",
    "org-name": "Hasiru Dala",
    "org-admin": "admin@hasiru",
    "secrets": secrets,
    "files": {
        "adminUsers": {
            // "prod": ["admin-user.json"],
            "dev": ["users/dev-admin-user.json"],
        },
        "forms": [
            "registration/registrationForm.json"
        ],
        "formMappings": [
            "formMappings.json",
        ],
        "formDeletions": [
        ],
        "formAdditions": [
        ],
        "catchments": [
            "catchments.json",
        ],
        "checklistDetails": [
        ],
        "concepts": [
            "registration/registrationConcepts.json",
        ],
        "locations": [
            "addressLevel/locations.json",
        ],
        "programs": [],
        "encounterTypes": [],
        "operationalEncounterTypes": [],
        "operationalPrograms": [],
        "subjectTypes": ["subjectTypes.json"],
        "operationalSubjectTypes": ["operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["users/dev-users.json"]
        },
        "rules": [
            "./rules.js"
        ],
        "organisationSql": [
            /* "create_organisation.sql"*/
        ]
    }
}, rulesConfigInfra);
