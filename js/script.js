//event pada saat link di klik
$('.page.scroll').on('click', function(e){

	//ambil isi herf
	var tujuan = $(this).attr('herf');
	//tangkap element ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250,'easeInOutExpo');

	e.preventDefault();
});