

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8IAFXtoc.js","_app/immutable/chunks/disclose-version.zfIMc2XZ.js","_app/immutable/chunks/runtime.ohFwk6ua.js"];
export const stylesheets = [];
export const fonts = [];
