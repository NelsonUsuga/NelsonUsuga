function onClickNav(li){

	let id= li.id;

	for (let i = 1; i <= 6; i++) {
		let div = document.getElementById('div_'+i);
		let li = document.getElementById('li_'+i);

		if(id === 'li_'+i)
		{
			div.hidden = false;
			li.style.backgroundColor = '#222222';
		}
		else
		{
			div.hidden = true;
			li.style.backgroundColor = 'grey';
		}
	}
}