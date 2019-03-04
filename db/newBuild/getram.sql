select * from ram
where dimms <= ${ram_slots}
order by name asc;