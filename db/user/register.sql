insert into pcreate_users(
  email,
  hash,
  pic_link
) values(
  ${username},
  ${hash},
  ${pic_link}
) returning *;