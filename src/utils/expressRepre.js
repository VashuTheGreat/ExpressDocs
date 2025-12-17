export function expressRepre(config,fn) {
    fn._config=config;
    return fn;
}