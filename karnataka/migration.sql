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













--Script to migrate Health encounter questions to Registration
set role hasiru_ka_uat;
-- 1809	Registration
-- 3036	Health form Details group_id = 6066
-- 3880	Health and Sanitation Information

update form_element
set form_element_group_id = 3880,
    display_order = display_order + 11,
    last_modified_date_time = current_timestamp + (id % 10000) * '1 milliseconds'::interval,
    last_modified_by_id = (select id from users where username = 'nupoork@hasiru_ka_uat')
where form_element_group_id = 6066;

-- Script to migrate health encounter observations to individual registration
update individual i
set observations = i.observations || enc.observations,
    last_modified_date_time = current_timestamp + ((i.id % 4000) * interval '1 millisecond'),
    last_modified_by_id = (select id from users where username = 'nupoork@hasiru_ka_uat')
from encounter enc
where  enc.individual_id = i.id
       and i.subject_type_id = 271
       and enc.encounter_type_id = 1199
       and enc.observations is not null;
       
       
       
       
       
       
       
-- Script to migrate FLP form group to Housing form
update form_element_group
 set form_id = (select id from form where name = 'Housing'),
     display_order = 2,
     last_modified_date_time = current_timestamp + (id % 10000) * '1 milliseconds'::interval,
     last_modified_by_id = (select id from users where username = 'nupoork@hasiru_ka_uat')
where form_id = (select id from form where name = 'FLP');

-- TO migrate flp form observations to Housing observations
update encounter 
set encounter.observations = encounter.observations || flp.observations,
    last_modified_date_time = current_timestamp + ((i.id % 4000) * interval '1 millisecond'),
    last_modified_by_id = (select id from users where username = 'nupoork@hasiru_ka_uat')

from encounter flp 
where flp.individual_id = encounter.individual_id
and encounter.encounter_type_id = (select id from encounter_type where name = 'Housing')
  and flp.encounter_type_id = (select id from encounter_type where name = 'FLP');

       
       
       
-- Script to move the bottom 2 question groups to a different form

select * from form f ;
select * from form_element_group feg where form_id = 2234;
select * from users;

update form_element_group 
set form_id = 2234,
display_order = 4,
last_modified_by_id = 6686,
last_modified_date_time = now()
where form_element_group.id = 6208;

update form_element_group 
set form_id = 2234,
display_order = 5,
last_modified_by_id = 6686,
last_modified_date_time = now()
where form_element_group.id = 6207;


-- Script to move the data to respective individuals

select * from subject_type st ; -- household id = 303
select * from encounter_type et ; -- Housing encounter id = 1223;



with multiple_encounters_done as (select individual_id,last_modified_date_time, row_number() over (partition by enc.individual_id order by enc.encounter_date_time desc) 
as visit_number 
from encounter enc
where encounter_type_id = 1223
)
 update individual
set observations = individual.observations || enc.observations,
    last_modified_date_time = current_timestamp + ((individual.id % 4000) * interval '1 millisecond'),
    last_modified_by_id = 6686
from encounter enc, multiple_encounters_done
where individual.id = multiple_encounters_done.individual_id
 and enc.individual_id = individual.id
       and individual.subject_type_id = 303
       and enc.encounter_type_id = 1223
       and enc.observations is not null
       and multiple_encounters_done.visit_number = 1
       ;
       
       
       
       
       
