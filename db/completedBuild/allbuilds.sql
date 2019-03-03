select * from pcreate_users 
inner join build
on (pcreate_users.email = build.user_email);