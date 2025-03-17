export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "myTodosWeb/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CTwOeZds.js","app":"_app/immutable/entry/app.Cvd8B6WD.js","imports":["_app/immutable/entry/start.CTwOeZds.js","_app/immutable/chunks/entry.Be8woasd.js","_app/immutable/chunks/runtime.ohFwk6ua.js","_app/immutable/entry/app.Cvd8B6WD.js","_app/immutable/chunks/runtime.ohFwk6ua.js","_app/immutable/chunks/store.BNTUD2x5.js","_app/immutable/chunks/disclose-version.zfIMc2XZ.js","_app/immutable/chunks/index-client.cTzUbgid.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
