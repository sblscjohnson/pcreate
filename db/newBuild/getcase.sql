select * from cases
where mobo_type <= ${mobo_type}
order by name asc;