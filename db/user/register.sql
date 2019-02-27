insert into pcreate_users(
  email,
  hash,
  pic_link
) values(
  ${email},
  ${hash},
  ${pic_link}
) returning *;