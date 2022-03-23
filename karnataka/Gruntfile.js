const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');

module.exports = IDI.configure({
    // "name": "wwa",
    // "chs-admin": "admin",
    // "org-name": "Waste Workers Association",
    // "org-admin": "nupoork@wwa",
    // "secrets": '../../secrets.json',
    "name": "hasiru_ka_uat",
    "chs-admin": "admin",
    "org-name": "Hasiru KA uat",
    "org-admin": "nupoork@hasiru_ka_uat",
    "secrets": '../../secrets.json',
    "files": {
        "adminUsers": {
            "prod": ["admin-user.json"],
            "dev": ["users/dev-admin-user.json"],
            "staging": ["users/dev-admin-user.json"],
            "uat": ["users/uat-admin-user.json"]
        },
        "forms": [
            "../forms/Registration.json"
        ],
        "formMappings": [
            "../formMappings.json",
        ],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": [
            "catchments.json",
        ],
        "checklistDetails": [],
        "concepts": [
            "../concepts.json",
        ],
        "locations": [
            "locations/state.json",
            "locations/city.json",
            "locations/zones.json",
            "locations/wards.json",
        ],
        "programs": [],
        "encounterTypes": [],
        "operationalEncounterTypes": [],
        "operationalPrograms": [],
        "subjectTypes": ["../subjectTypes.json"],
        "operationalSubjectTypes": ["operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["users/dev-users.json"],
            "staging": ["users/staging-users.json"],
            "uat": ["users/uat-users.json"]
        },
        "rules": [
            "../rules.js"
        ],
        "organisationSql": [
            /* "create_organisation.sql"*/
        ],
        "organisationConfig": ["organisationConfig.json"],
        "translations": [
            "translations/en.json",
            "translations/ka_IN.json"
        ]
    }
}, rulesConfigInfra);
