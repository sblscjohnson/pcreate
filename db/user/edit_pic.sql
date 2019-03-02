update pcreate_users
set pic_link = ${pic_link}
where id = ${id}
returning *;