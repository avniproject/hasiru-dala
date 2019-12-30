select create_db_user('hasiru_karnataka', 'password');

INSERT into organisation(name, db_user, uuid, parent_organisation_id)
values ('Hasiru Dala Karnataka', 'hasiru_karnataka', '122f37c1-b3a3-4d12-b109-c2e14651f86a',  null);