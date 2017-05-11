Handlebars.registerHelper(
	"tz", function(time) {
		if (time) {
			var utc = moment.utc(time, "ddd HH:mm:ss").toDate();
			return moment(utc).format("ddd HH:mm");
		} else {
			return "";
		}
	}
);
