$(document).ready(function() {
	var dl_sets = 5;
	var bp_sets = 5;


	$("#dl_add_button").click(function() {
		dl_sets = generic_add_set('dl', dl_sets);
	});


	$("#bp_add_button").click(function() {
		bp_sets = generic_add_set('bp', bp_sets);
	});

	function generic_add_set(ex, count) {
		if (count < 8) {
			count++;

			$('#' + ex + '_set_' + count).removeClass('hide');
			if (count == 8) {
				$('#' + ex + '_add_button_div').addClass('hide');
			}
		}

		return count;
	}
});