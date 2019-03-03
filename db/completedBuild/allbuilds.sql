select * from build 
inner join pcreate_users
on (pcreate_users.id = build.user_id);