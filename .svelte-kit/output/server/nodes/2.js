

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.41L6zHWx.js","_app/immutable/chunks/disclose-version.zfIMc2XZ.js","_app/immutable/chunks/runtime.ohFwk6ua.js","_app/immutable/chunks/legacy.CxzycWqg.js","_app/immutable/chunks/index-client.cTzUbgid.js","_app/immutable/chunks/store.BNTUD2x5.js"];
export const stylesheets = ["_app/immutable/assets/2.BKjCRgin.css"];
export const fonts = [];
