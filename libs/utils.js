module.exports.toClassName = (templateName) => (templateName.charAt(0).toUpperCase() + templateName.slice(1).replace(/-([a-z])/g, (x, up) => up.toUpperCase()));
