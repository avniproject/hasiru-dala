select create_db_user('hasiru', 'password');

INSERT into organisation(name, db_user, uuid, parent_organisation_id)
SELECT 'Hasiru Dala', 'hasiru', 'a718baa6-13d7-4dbd-a0e5-5af3a1d36e29', id
FROM organisation
WHERE name = 'OpenCHS' and not exists (select 1 from organisation where name = 'Hasiru Dala');
