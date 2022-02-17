Will have run the following script to update observations for existing individuals--

-- Scrip to add observation where audio is available
update individual i
set observations = i.observations ||
jsonb_build_object('47233ab8-3190-4de6-8e09-572e5d1480cc', '356bb870-5b4b-4e9e-9e50-dcc37beea7dc'),
last_modified_date_time = current_timestamp + ((i.id % 4000) * interval '1 millisecond'),
last_modified_by_id = (select id from users where username = 'nupoork@hasiru_ka_uat')
where i.observations ->> '36f29633-4d58-46e4-9f67-c2ef47d48032' is not null;

-- Scrip to add observation where audio is not available
update individual i
set observations = i.observations ||
jsonb_build_object('47233ab8-3190-4de6-8e09-572e5d1480cc', '249ee1c0-9a18-4854-85cf-3206ce1071fd'),
last_modified_date_time = current_timestamp + ((i.id % 4000) * interval '1 millisecond'),
last_modified_by_id = (select id from users where username = 'nupoork@hasiru_ka_uat')
where i.observations ->> '36f29633-4d58-46e4-9f67-c2ef47d48032' is null;
