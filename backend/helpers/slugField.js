const slugify = require("slugify");

const options = {
    replacement: '-',
    remove: undefined,
    lower: false,
    strict: true,
    locale: 'en',
    trim: true
}

module.exports = function slugField(str) {
    const slugUrl = str + "-" + Math.round(Math.random() * 1E9)
    return slugify(slugUrl, options)
}