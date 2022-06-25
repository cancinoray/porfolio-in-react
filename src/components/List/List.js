function List({items}) {
	return(
		<ul>
			{items.map((items) => (
				<li key={items.field}>
					<span>{items.field}: </span>
						{items.value}
				</li>
			))}
		</ul>

	);

}


export default List