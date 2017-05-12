Handlebars.registerHelper(
	"tz", function(time) {
		if (time) {
			var utc = moment().toDate();
			return moment(utc).local().format("ddd HH:mm");
		} else {
			return "";
		}
	}
);
