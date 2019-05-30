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
            "dev": [],
        },
        "forms": [

        ],
        "formMappings": [
        ],
        "formDeletions": [
        ],
        "formAdditions": [
        ],
        "catchments": [
        ],
        "checklistDetails": [
        ],
        "concepts": [
        ],
        "locations": [
        ],
        "programs": [],
        "encounterTypes": [],
        "operationalEncounterTypes": [],
        "operationalPrograms": [],
        "operationalSubjectTypes": [],
        "users": {
            "dev": []
        },
        "rules": [
        ],
        "organisationSql": [
            /* "create_organisation.sql"*/
        ]
    }
}, rulesConfigInfra);
