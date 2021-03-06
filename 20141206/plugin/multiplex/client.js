(function() {
	var multiplex = Reveal.getConfig().multiplex;
	var socketId = multiplex.id;
	var socket = io.connect(multiplex.url);

	socket.on(multiplex.id, function(data) {
		// ignore data from sockets that aren't ours
		if (data.socketId !== socketId) { return; }
		if( window.location.host === 'http://seminar1412.publisher.name/' ) return;

		Reveal.slide(data.indexh, data.indexv, data.indexf, 'remote');
	});
}());
