$(document).ready(function() {
	var dl_sets = 5;



	$("#dl_add_button").click(function() {
		dl_sets++;

	var dl_divs = '<div class="ui-grid-a small"><div class="ui-block-a"><input type=number name=set' + dl_sets + '_reps style="width:85%;" placeholder="Set#' + dl_sets + ', Reps" data-mini="true" /></div><div class="ui-block-b"><input type=number name=set' + dl_sets + '_weights style="width:85%;" placeholder="Set#' + dl_sets + ', Weights" data-mini="true" /></div></div>';

		$('#dl_extra_sets').html($('#dl_extra_sets').html() + dl_divs + "<br />");
	});
});