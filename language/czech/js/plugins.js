$(function()
{
	var scrollButton = $(".scroll-top");
	$(window).scroll(function()
	{
		if($(this).scrollTop() >=0)
		{
			scrollButton.show();
		}
		else
		{
			scrollButton.hide();
		}
	});

	// click on button to scroll up
	scrollButton.click(function()
	{
		$("html,body").animate({scrollTop:0},1000);
	});
});





