var TSsmj = TSsmj || {};

TSsmj.Logs = (function(){
	
	function Logs(){
	}
	
	Logs.prototype.iniciar = function(){
		$.ajax({
			url: 'https://api.github.com/repos/tiagosousaeti/spring-mvc-jsp/commits',
			method: 'GET',
			contentType: 'application/json',
			success: sucesso.bind(this),
			error: erro.bind(this)
		});
	}
	
	function sucesso(registros) {
		$.each(registros, function(i, ivalue) {
			//$('#commits').append($('<li  class="list-group-item">').text(registros[i].commit.message));
			$('#commits').append($('<li  class="list-group-item">' + registros[i].commit.message + '<a href=' + registros[i].html_url + ' target="_blank" title="Ver no github"><i class="fa  fa-external-link  ml1"></i></a></li>'));
		});
	}
	
	function erro() {
		console.log('ERRO');
	}
	
	return Logs;	
}());

$(function() {
	var logs = new TSsmj.Logs();
	logs.iniciar();
});