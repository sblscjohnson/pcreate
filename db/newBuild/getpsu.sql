select * from psus
where size >= ${psu_size}
and tier <= ${tier}
order by name asc;