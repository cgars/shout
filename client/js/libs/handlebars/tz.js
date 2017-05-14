Handlebars.registerHelper(
	"tz", function(time) {
		if (time) {
			var utc = moment.utc(time, "ddd HH:mm").toDate();
			return moment(utc).local().format("ddd HH:mm");
		} else {
			return "";
		}
	}
);
