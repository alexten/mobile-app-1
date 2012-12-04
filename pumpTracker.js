$(document).ready(function() {
	var dl_sets = 5;
	var bp_sets = 5;
	var hc_sets = 5;
	var cl_sets = 5;

	$("#dl_add_button").click(function() {
		dl_sets = generic_add_set('dl', dl_sets);
	});


	$("#bp_add_button").click(function() {
		bp_sets = generic_add_set('bp', bp_sets);
	});


	$("#hc_add_button").click(function() {
		hc_sets = generic_add_set('hc', hc_sets);
	});


	$("#cl_add_button").click(function() {
		cl_sets = generic_add_set('cl', cl_sets);
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