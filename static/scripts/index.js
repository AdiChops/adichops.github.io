addEventListener('scroll', () => {
	if (document.body.scrollTop > innerHeight || document.documentElement.scrollTop > innerHeight){
		document.getElementById("gohome").style.display = "block";
	}
	else{
		document.getElementById("gohome").style.display = "none";
    }
    // console.log(document.getElementById('about').getBoundingClientRect().top);
});