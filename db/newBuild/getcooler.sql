select * from coolers
where socket = ${socket}
and (aio_size >= ${max_aio}
or air_size >= ${max_air})
order by name asc;