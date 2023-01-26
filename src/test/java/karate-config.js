function(){
	var config = {
		baseUrl: '',
		naseKdbc:''
	}
	var env = karate.env
	karate.long("Environment variable value is......:", env)
	if (env=='prod') {
		config.baseUrl = 'www.google.com';
	}
	return config;
}