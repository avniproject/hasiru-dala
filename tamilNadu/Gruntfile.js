const rulesConfigInfra = require('rules-config/infra');
const IDI = require('openchs-idi');

module.exports = IDI.configure({
    "name": "hasiru",
    "chs-admin": "admin",
    "org-name": "Hasiru Dala",
    "org-admin": "admin@hasiru",
    "secrets": '../../secrets.json',
    "files": {
        "adminUsers": {
            // "prod": ["admin-user.json"],
            "dev": ["users/dev-admin-user.json"],
            "staging": ["users/dev-admin-user.json"],
            "uat": ["users/uat-admin-user.json"]
        },
        "forms": [
            "../forms/Registration.json",
            "../forms/Social Security.json",
            "../forms/Start Facilitation.json",
            "../forms/Documents Collection.json",
            "../forms/Submit Application.json",
            "../forms/Enquire Application Status.json",
            "../forms/Collect Additional Documents.json",
            "../forms/Encounter Cancelation.json",
            "../forms/Recurring Facilitation.json",
        ],
        "formMappings": [
            "../formMappings.json",
        ],
        "formDeletions": ["../forms/EnrolmentDeletions.json"],
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
        "programs": ["../programs.json"],
        "encounterTypes": ["../encounterTypes.json"],
        "operationalEncounterTypes": ["operationalModules/operationalEncounterTypes.json"],
        "operationalPrograms": ["operationalModules/operationalPrograms.json"],
        "subjectTypes": ["../subjectTypes.json"],
        "operationalSubjectTypes": ["operationalModules/operationalSubjectTypes.json"],
        "users": {
            "dev": ["users/dev-users.json"],
            "staging": ["users/staging-users.json"]
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
            "translations/ta_IN.json",
        ]
    }
}, rulesConfigInfra);
